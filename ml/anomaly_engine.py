"""
SPACELITH AERONAUTS — EDGE RUNTIME
Module: Anomaly & Attitude Drift Engine
Framework: Lightweight streaming time-series anomaly detection for satellite telemetry.
"""

import numpy as np
from dataclasses import dataclass
from typing import Dict, Any


@dataclass
class TelemetryFrame:
    timestamp_utc: str
    quaternion: list  # [q0, q1, q2, q3]
    angular_velocity: list  # [wx, wy, wz] in rad/s
    bus_voltage_v: float
    solar_current_a: float
    temp_celsius: float


class TelemetryAnomalyDetector:
    def __init__(self, anomaly_threshold: float = 0.70):
        self.threshold = anomaly_threshold
        # Baseline operational bounds (nominal Sun-Synchronous LEO)
        self.nominal_voltage_range = (27.5, 33.2)
        self.nominal_temp_range = (-10.0, 45.0)
        self.max_angular_rate = 0.05  # rad/s (~2.8 deg/s)

    def evaluate_frame(self, frame: TelemetryFrame) -> Dict[str, Any]:
        """
        Calculates composite anomaly coefficient (0.0 to 1.0).
        Evaluates mechanical attitude dynamics and electrical/thermal health.
        """
        scores = []

        # 1. Angular rate tumble check
        total_rate = np.linalg.norm(frame.angular_velocity)
        rate_anomaly = min(1.0, max(0.0, (total_rate - self.max_angular_rate) / self.max_angular_rate))
        scores.append(rate_anomaly * 1.5)  # Heavy weight on attitude instability

        # 2. Voltage deviation
        v = frame.bus_voltage_v
        if v < self.nominal_voltage_range[0] or v > self.nominal_voltage_range[1]:
            v_dev = min(abs(v - self.nominal_voltage_range[0]), abs(v - self.nominal_voltage_range[1]))
            scores.append(min(1.0, v_dev / 5.0))
        else:
            scores.append(0.0)

        # 3. Thermal deviation
        t = frame.temp_celsius
        if t < self.nominal_temp_range[0] or t > self.nominal_temp_range[1]:
            t_dev = min(abs(t - self.nominal_temp_range[0]), abs(t - self.nominal_temp_range[1]))
            scores.append(min(1.0, t_dev / 20.0))
        else:
            scores.append(0.0)

        # Composite coefficient
        anomaly_score = float(np.clip(np.mean(scores), 0.0, 1.0))
        is_anomaly = anomaly_score >= self.threshold

        return {
            "timestamp": frame.timestamp_utc,
            "anomaly_score": round(anomaly_score, 4),
            "status": "CRITICAL_DRIFT" if is_anomaly else "NOMINAL",
            "metrics": {
                "angular_velocity_norm": round(float(total_rate), 5),
                "voltage": frame.bus_voltage_v,
                "temperature": frame.temp_celsius,
            },
        }


if __name__ == "__main__":
    detector = TelemetryAnomalyDetector()

    # Nominal Frame Example
    nominal_frame = TelemetryFrame(
        timestamp_utc="2026-09-25T11:42:01Z",
        quaternion=[0.7071, 0.0, 0.7071, 0.0],
        angular_velocity=[0.002, 0.001, -0.001],
        bus_voltage_v=29.4,
        solar_current_a=4.2,
        temp_celsius=18.5,
    )
    print("Nominal Check:", detector.evaluate_frame(nominal_frame))

    # Anomaly Frame Example (Tumbling + Overheat)
    anomaly_frame = TelemetryFrame(
        timestamp_utc="2026-09-25T11:42:02Z",
        quaternion=[0.5, 0.5, 0.5, 0.5],
        angular_velocity=[0.12, 0.08, -0.09],  # Tumbling rate
        bus_voltage_v=24.1,                   # Battery drop
        solar_current_a=0.8,
        temp_celsius=62.0,                    # Thermal spike
    )
    print("Anomaly Check:", detector.evaluate_frame(anomaly_frame))