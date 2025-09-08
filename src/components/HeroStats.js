import React, { useState, useEffect } from "react";
import "./HeroStats.css";

const statsData = [
    { label: "छात्र", target: 500, initial: 300 },
    { label: "पाठक्रम", target: 50, initial: 0 },
    { label: "वर्ष", target: 10, initial: 0 },
];

const HeroStats = () => {
    const [counters, setCounters] = useState(statsData.map(stat => stat.initial));

    useEffect(() => {
        const interval = setInterval(() => {
            setCounters(prev =>
                prev.map((count, index) => {
                    if (count < statsData[index].target) {
                        // Increment smoothly: by 1 or a small fraction
                        const increment = Math.ceil((statsData[index].target - count) / 10);
                        return count + increment;
                    }
                    return count;
                })
            );
        }, 50); // Update interval in milliseconds

        // Stop the interval when all counters reach their targets
        const allReached = () => counters.every((count, index) => count >= statsData[index].target);

        if (allReached()) {
            clearInterval(interval);
        }

        return () => clearInterval(interval); // Cleanup on unmount
    }, [counters]);

    return (
        <div className="hero-stats">
            {statsData.map((stat, index) => (
                <div key={index} className="stat-item">
                    <span className="stat-number-wrapper">
                        <span className="stat-number">{counters[index]}</span>
                        <span className="plus">+</span>
                    </span>
                    <br />
                    <span className="stat-label">{stat.label}</span>
                </div>
            ))}
        </div>
    );
};

export default HeroStats;
