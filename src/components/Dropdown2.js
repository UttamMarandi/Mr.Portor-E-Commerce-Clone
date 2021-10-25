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
  // function close(e) {
  //   console.log(e.target, ref.current);
  //   setOpen(e && e.target === ref.current); //ref.current is the div with "selected-value" class. e.target reprsent any dom element that is clicked. so if clicked element is not the div, then setOpen is set to false
  //Did not work out well as we can't toggle the dropdown  }
  function close(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  }
  //if ref element does not contain the currently clicked target element than close the dropdown

  return (
    <div className="dropdown relative  ">
      <div className="control" onClick={() => setOpen(!open)} ref={ref}>
        <div className="selected-value cursor-pointer text-left">
          {value ? value : clickText}
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {sizeOptions.map((option, index) => (
          <div
            key={index}
            className={`option cursor-pointer ${
              value === option ? "selected" : null
            }`}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown2;
