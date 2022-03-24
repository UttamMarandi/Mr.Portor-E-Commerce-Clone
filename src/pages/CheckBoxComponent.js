import React from "react";

const CheckBoxComponent = ({ count, setCheck, addCount, removeCount }) => {
  const checkBoxClicked = (e) => {
    const { checked } = e.target;
    if (checked === true) {
      addCount();
    }
    if (checked === false) {
      removeCount();
    }
    // console.log("count", count);

    // console.log("count2", count);
  };

  return (
    <>
      <div className="check_div">
        <div className="check_div_inner">
          <label htmlFor="vechile1">Vechile 1</label>
          <input
            type="checkbox"
            id="vechile1"
            name="vechile"
            value="Bike"
            onChange={checkBoxClicked}
          />
        </div>
        <div className="check_div_inner">
          <label htmlFor="vechile2"> Vechile 2</label>
          <input
            type="checkbox"
            id="vechile2"
            name="vechil2"
            value="Bike"
            onChange={checkBoxClicked}
          />
        </div>
        <div className="check_div_inner">
          <label htmlFor="vechile3"> Vechile 3</label>
          <input
            type="checkbox"
            id="vechile3"
            name="vechil3"
            value="Bike"
            onChange={checkBoxClicked}
          />
        </div>
        <div className="check_div_inner">
          <label htmlFor="vechile4"> Vechile 4</label>
          <input
            type="checkbox"
            id="vechile4"
            name="vechil4"
            value="Bike"
            onChange={checkBoxClicked}
          />
        </div>
        <div className="check_div_inner">
          <label htmlFor="vechile5"> Vechile 5</label>
          <input
            type="checkbox"
            id="vechile5"
            name="vechie5"
            value="Bike"
            onChange={checkBoxClicked}
          />
        </div>
      </div>
    </>
  );
};

export default CheckBoxComponent;
