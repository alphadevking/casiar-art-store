import React, { useState, useEffect } from 'react';

export const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span>
            {time.toLocaleTimeString()}
        </span>
    );
}
