import React, { useState, useEffect } from "react";

function LocalTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <p>{formattedTime}</p>
    </div>
  );
}

export default LocalTime;
