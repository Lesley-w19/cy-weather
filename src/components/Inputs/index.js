import React, { useState } from "react";
import {
  UilSearch,
  UilLocationPoint,

} from "@iconscout/react-unicons";


const Inputs = (props) => {
  const { setLatitude, setLongitude } = props;
  const [location, setLocation] = useState({
    lat: "",
    long: "",
  });
  const handleSearch = (e) => {
    e.preventDefault();
    setLatitude(parseFloat(location.lat));
    setLongitude(parseFloat(location.long));
    setLocation({
        lat: "",
        long: "", 
    })
  };

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  };

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString("en-US", options);
 const time = new Date().toLocaleTimeString()

  return (
    <React.Fragment>
      <div className="inputs mx-auto mt-3  d-flex align-items-center justify-content-center">
        <div>
         <label htmlFor="" className="mb-1 mx-1">Longitude<span className="text-danger">*</span></label>
        <input
          type="text"
          placeholder="Enter longitude"
          value={location.lat}
          onChange={(e) =>
            setLocation((prevState) => ({ ...prevState, lat: e.target.value }))
          }
          className="text-capitalize outline-none border-none py-1"
        />   
        </div>
        <div className="mx-2">
            <label htmlFor="" className="mb-1 mx-1">Latitude <span className="text-danger">*</span></label>
          <input
          type="text"
          placeholder="Enter latitude"
          value={location.long}
          onChange={(e) =>
            setLocation((prevState) => ({ ...prevState, long: e.target.value }))
          }
          className="text-capitalize outline-none border-none py-1 mx-1 "
        />   
        </div>
       
        <div className="icons p-3 d-flex align-items-center justify-content-center mt-3">
       
          <UilSearch
            size={22}
            className="icn text-white mx-2"
            onClick={handleSearch}
          />
          <UilLocationPoint
            size={22}
            className="icn text-white  mx-2 "
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="time-location mt-3 d-flex align-items-center justify-content-center text-white">
        
        <p> {date} | Local Time: {time}</p>
      </div>
      {/* <div className="location">
        <h3 className="fw-bold mt-3 d-flex align-items-center justify-content-center text-white">
          {" "}
          Berlin, DC
        </h3>
      </div> */}
   
    </React.Fragment>
  );
};
export default Inputs;
