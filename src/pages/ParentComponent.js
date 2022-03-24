import React, { useCallback, useEffect, useState } from "react";
import CheckBoxComponent from "./CheckBoxComponent";

const ParentComponent = () => {
  const [check, setCheck] = useState(false);
  let [count, setCount] = useState(0);
  const callCheck = useCallback(() => {
    console.log("count in callcheck", count);
    if (count >= 5) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [count]);

  useEffect(() => {
    callCheck();
  }, [count, callCheck]);
  return (
    <>
      <div
        style={
          check
            ? { background: "green", height: "300px", width: "300px" }
            : { background: "red", height: "300px", width: "300px" }
        }
      ></div>
      <CheckBoxComponent
        count={count}
        addCount={() => {
          setCount((prevState) => prevState + 1);
        }}
        removeCount={() => {
          setCount((prevState) => prevState - 1);
        }}
      />
    </>
  );
};

export default ParentComponent;
