import React, { useEffect, useState } from "react";
import { UilClouds } from "@iconscout/react-unicons";

const Forecast = (props) => {
  const { data } = props;
    const [weather, setWeather] = useState(6);

//   useEffect(() =>{
//    if(weather < 18){
//     const result = weather + 1;
//     setWeather(result);
//     console.log(weather)
//    }
//   }, [weather]) 


  const time = data?.hourly?.time.slice(11,16);
  const cloud = data?.hourly?.cloudcover_mid;
  const humidity = data?.hourly?.relativehumidity_2m.slice(6, 18);
  const wind = data?.hourly?.windspeed_120m.slice(6, 18);
  const temp = data?.hourly?.temperature_2m;
  //   const [weather, setWeather] = useState({
  //     time: data?.hourly?.time.slice(6, 18),
  //     cloud,
  //     humidity,
  //     wind,
  //     temp,
  //   });

  console.log(time);;
 



  console.log(weather)
  return (
    <React.Fragment>
      <div className="forecast mt-3">
        <h6 className="title text-white text-uppercase">Hourly Forecast</h6>
      </div>
      <div className="forecast-about mt-3">
        <div className="forecast-description">
         
         {
            weather && weather < 19 ? 
            <div></div> : ""
         }
        </div>
        <div className="forecast-description">
          <div>
            <p className="time text-white text-uppercase">06:00 AM</p>
          </div>
          <div className="weather">
            <UilClouds />
            <p>Cloudy</p>
          </div>
          <div className="temperature">
            <p>
              Temp: <span>34&deg;</span>
            </p>
          </div>
          <div className="wind">
            <p>
              Wind: <span>23km/h</span>
            </p>
          </div>
          <div className="humidity">
            <p>
              Humidity: <span>20</span>
            </p>
          </div>
        </div>
        <div className="forecast-description">
          <div>
            <p className="time text-white text-uppercase">06:00 AM</p>
          </div>
          <div className="weather">
            <UilClouds />
            <p>Cloudy</p>
          </div>
          <div className="temperature">
            <p>
              Temp: <span>34&deg;</span>
            </p>
          </div>
          <div className="wind">
            <p>
              Wind: <span>23km/h</span>
            </p>
          </div>
          <div className="humidity">
            <p>
              Humidity: <span>20</span>
            </p>
          </div>
        </div>
        <div className="forecast-description">
          <div>
            <p className="time text-white text-uppercase">06:00 AM</p>
          </div>
          <div className="weather">
            <UilClouds />
            <p>Cloudy</p>
          </div>
          <div className="temperature">
            <p>
              Temp: <span>34&deg;</span>
            </p>
          </div>
          <div className="wind">
            <p>
              Wind: <span>23km/h</span>
            </p>
          </div>
          <div className="humidity">
            <p>
              Humidity: <span>20</span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Forecast;
