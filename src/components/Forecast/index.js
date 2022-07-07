import React, { useEffect, useState } from "react";
import {
  UilClouds,
  UilSun,
  UilTemperatureEmpty,
  UilTear,
  UilWind,
  UilCloudRain
} from "@iconscout/react-unicons";

const Forecast = (props) => {
  const { data, longitude, latitude, setTemp } = props;
  const [weather, setWeather] = useState([
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ]);

  const i = Math.floor(Math.random() * 12);
  const time = data?.hourly?.time;
  const cloud = data?.hourly?.cloudcover_mid;
  const humidity = data?.hourly?.relativehumidity_2m;
  const wind = data?.hourly?.windspeed_120m;
  const temp = data?.hourly?.temperature_2m;

  setTemp(temp && temp[i]);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 temp-about mt-3">
          {/* <p className="text-primary">Cloudy</p> */}
        </div>
        <div className="row details mx-auto text-light ">
          <div className="col-sm-4">
            <h1>
              <UilSun size={28} className="icon text-light" />
              <UilCloudRain size={28} className="icon text-light"/>
            </h1>
          </div>
          <div className="text-center col-sm-4">
            <h1>{temp && temp[i]}&deg;</h1>
          </div>
          <div className="  more col-sm-4">
            <div>
              <UilTemperatureEmpty />
              <p className="my-auto">
                Real temp: <span className="mx-1">{temp && temp[i]}&deg;</span>
              </p>
            </div>
            <div>
              <UilWind />
              <p className="my-auto">
                Wind: <span className="mx-1">{wind && wind[i]}km/h</span>
              </p>
            </div>
            <div>
              <UilTear />
              <p className="my-auto">
                Humidity:{" "}
                <span className="mx-1">{humidity && humidity[i]}%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container forecast mt-3 w-75">
        <h6 className="title text-white text-uppercase d-flex align-content-center justify-content-between ">
          Hourly Forecast{" "}
          <span
            className="text-dark"
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            {longitude}, {latitude}
          </span>
        </h6>
      </div>
      <div className="forecast-about row mt-3">
        {weather.map((w, index) => (
          <div
            className="forecast-description col-sm-4 col-md-4 col-lg-2"
            key={index}
          >
            <div>
              <p className="time text-white text-uppercase">
                    {time && time[w].slice(11, 16)} {`${time && time[w].slice(11, 16) < "12:00" ? "AM" : "PM"}`}
      
              </p>
            </div>
            <div className="weather">
              <UilClouds />
              <p>
                Cloud cover: <span>{cloud && cloud[w]}</span>
              </p>
            </div>
            <div className="temperature">
              <p>
                Temp: <span>{temp && temp[w]}&deg;</span>
              </p>
            </div>
            <div className="wind">
              <p>
                Wind: <span>{wind && wind[w]}km/h</span>
              </p>
            </div>
            <div className="humidity">
              <p>
                Humidity: <span>{humidity && humidity[w]}%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default Forecast;
