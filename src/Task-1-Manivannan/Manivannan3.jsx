import { useState } from "react";
export default function Array() {
  const [array, setArray] = useState([]);
  return (
    <>
      <ol>
        {array.map((data) => {
          return <li>{JSON.stringify(data)}</li>;
        })}
      </ol>
    </>
  );
}
