import React from "react";
function MidAsses1() {
  const Skills = ["React", "Node", "HTML", "CSS"];
  const evenNum = [2, 4, 6];
  const double = (num) => num * 2;
  const even = evenNum.map(double);
  console.log(even);
  return (
    <>
      {" "}
      {Skills.map((skill) => (
        <div key={skill}>{skill}</div>
      ))}{" "}
    </>
  );
}
export default MidAsses1;
