import React from "react";

const LocalTime = ({ minutes }) => {
  const now = new Date();
  now.setMinutes(minutes); // Устанавливаем минуты

  const formattedTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return <span>{formattedTime}</span>;
};

export default LocalTime;
