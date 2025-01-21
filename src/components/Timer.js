import React, { useEffect } from "react";

export default function Timer({ dispatch, timeRemaining }) {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  useEffect(
    function () {
      let timer = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);
      return function () {
        clearInterval(timer);
      };
    },
    [dispatch]
  );
  return (
    <p className="timer">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </p>
  );
}
