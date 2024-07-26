import React, { useState } from "react";
// import LocalTime from "../TodayListModal/LocalTime";

const TimePicker = () => {
  const [count, setCount] = useState([]);

  const onClickSelectTime = () => {
    const newCount = [];
    for (let i = 5; i <= 55; i += 5) {
      newCount.push(i);
    }
    setCount(newCount);
    console.log(newCount);
  };

  return (
    <div>
      <button onClick={onClickSelectTime}>startaaaaaaaaaaaaaa</button>
      <select>
        {count.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
