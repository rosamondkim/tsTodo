import React from "react";
// import styles from "./Date.module.scss";

type DateProps = {
  month: number;
  day: number;
  date: number;
};

function Date({ month, day, date }: DateProps) {
  return (
    <div>
      <p>2023년</p>
      <div>
        <p>3일</p>
        <p>5월</p>
      </div>
    </div>
  );
}

export default Date;
