import React from "react";
export default function Q19() {
  const arrA = ["Gowtham", "nibras", "murali", "uvan", "raj"];
  return (
    <div>
      {" "}
      {arrA.map((value, i) => (
        <li key={i}>{value}</li>
      ))}{" "}
    </div>
  );
}
