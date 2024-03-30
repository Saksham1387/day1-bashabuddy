import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [selectedMinutes, setSelectedMinutes] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(0);

  // Start or reset the timer whenever selectedMinutes changes
  useEffect(() => {
    if (selectedMinutes) {
        //@ts-ignore
      setSecondsLeft(selectedMinutes * 60); // Convert minutes to seconds
    }
  }, [selectedMinutes]);

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(interval); // Stop the interval when reaching 0
          return 0;
        }
        return prevSeconds - 1; // Decrease the seconds left by 1 every second
      });
    }, 1000); // Run every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedMinutes]);

  // Format the remaining time
        //@ts-ignore

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
        {secondsLeft > 0 && (
        <div className="mt-4 text-lg font-bold text-neutral-500 ml-[55px]">
         {formatTime(secondsLeft)}
        </div>
      )}
      <select
        value={selectedMinutes}
        onChange={(e) => setSelectedMinutes(e.target.value)}
        className="p-3 rounded-2xl shadow-lg bg-orange-400"
      >
        <option className="mr-3" value="">Select Minutes</option>
        <option value="1">1 Minute</option>
        <option value="5">5 Minutes</option>
        <option value="10">10 Minutes</option>
      </select>
    </div>
  );
};

export default TimerComponent;
