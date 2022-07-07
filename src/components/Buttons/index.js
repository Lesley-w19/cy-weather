import React, { useState } from "react";

const TopButtons = (props) => {
  const {setLatitude, setLongitude} = props;
    const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Tokyo",
    },
    {
      id: 3,
      name: "Paris",
    },
    {
      id: 4,
      name: "Sydney",
    },
  ];

  const [city, setCity] = useState("")
const handleClick = (e) =>{
  e.preventDefault();
  setLatitude(52.52)
  setLongitude(13.41)
}
  return (
    <React.Fragment>  <div className="cities mx-auto">
      {cities.map((city) => (
        <button key={city.id} className="btn text-white" onClick={(e)=> handleClick(e)}>{city.name}</button>
      ))}
    </div>
    </React.Fragment>
  );
};
export default TopButtons;
