import React from "react";
const Test = () => {
  var arr_of_5_items = [1, 2, 3, 4, 5];
  return (
    <div>
      {" "}
      {arr_of_5_items.map((element) => (
        <h2>{element}</h2>
      ))}{" "}
    </div>
  );
};
export default Test;
