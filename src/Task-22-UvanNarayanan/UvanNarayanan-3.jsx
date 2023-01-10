import React from "react";
function MapFunc() {
  const arrCon = [
    "India",
    "America",
    "New Zealand",
    "China",
    "Bangladesh",
    "SriLanka",
  ];
  return <div>arrCon.map((con,i)=>{<li key={i}>{con}</li>})</div>;
}
export default MapFunc;
