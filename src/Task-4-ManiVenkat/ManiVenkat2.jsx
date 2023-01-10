import React, { useState } from "react";
import { useEffect } from "react";
export default function Second() {
  const [a, setA] = useState(0);
  useEffect(() => {
    setA();
  }, []);
  const summer = () => {
    setA(Number(a) + 1);
  };
  const subtractor = () => {
    setA(Number(a) - 1);
  };
  return (
    <div>
      {" "}
      <h1>{a}</h1> <button onClick={summer}>add</button>{" "}
      <button onClick={subtractor}>minus</button>{" "}
    </div>
  );
}
