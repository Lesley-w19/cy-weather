import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <React.Fragment>
      <div className="inputs mx-auto mt-3 ">
        <input
          type="text"
          placeholder="search"
          className="text-capitalize outline-none border-none py-1 w-75"
        />
        <div className="icons px-3 d-flex align-items-center justify-content-center">
          <UilSearch size={22} className="icn text-white mx-2" />
          <UilLocationPoint
            size={22}
            className="icn text-white  mx-2 "
          />
        </div>
      </div>
      <div className="time-location mt-3 d-flex align-items-center justify-content-center text-white">
        <p>Tuesday 13th April | Local time: 12:45pm</p>
      </div>
      <div className="location">
       <h3 className="fw-bold mt-3 d-flex align-items-center justify-content-center text-white"> Berlin, DC</h3>
      </div>
    </React.Fragment>
  );
};
export default Inputs;
