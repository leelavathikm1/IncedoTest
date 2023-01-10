import React from "react";
const Array = () => {
  const items = [{ name: "Mango" }, { name: "Apple" }, { name: "Banana" }];
  return (
    <div>
      {" "}
      <h1>
        {items.map((item, i) => (
          <p>{item.name}</p>
        ))}{" "}
      </h1>{" "}
    </div>
  );
};
export default Array;
