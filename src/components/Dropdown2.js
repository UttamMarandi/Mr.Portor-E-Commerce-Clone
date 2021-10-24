import React, { useEffect, useRef, useState } from "react";

const Dropdown2 = ({ sizeOptions, clickText, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener("click", close);
    return () => {
      document.removeEventListener("click", close);
    };
  }, []);
  function close(e) {
    console.log(e.target, ref.current);
    setOpen(e && e.target === ref.current); //ref.current is the div with "selected-value" class. e.target reprsent any dom element that is clicked. so if clicked element is not the div, then setOpen is set to false
  }
  return (
    <div className="dropdown relative ">
      <div className="control" onClick={() => setOpen(!open)}>
        <div className="selected-value cursor-pointer " ref={ref}>
          {value ? value.value : clickText}
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {sizeOptions.map((option) => (
          <div
            key={option.value}
            className={`option cursor-pointer ${
              value === option ? "selected" : null
            }`}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown2;
