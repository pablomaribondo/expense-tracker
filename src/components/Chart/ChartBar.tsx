import React from "react";
import "./ChartBar.css";

const ChartBar: React.FC<{ value: number; maxValue: number; label: string }> =
  ({ value, maxValue, label }) => {
    const barFillHeight =
      maxValue > 0 ? `${Math.round((value / maxValue) * 100)}%` : "0%";

    return (
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div
            className="chart-bar__fill"
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className="chart-bar__label">{label}</div>
      </div>
    );
  };

export default ChartBar;
