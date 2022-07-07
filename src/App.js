import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
// import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
import Forecast from "./components/Forecast";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [temp, setTemp] = useState();

  useEffect(() => {
    const getWeather = async () => {
      try {
        let res = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m`
        );

        let data = res.data;
        // console.log(data);
        setData(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getWeather();
  }, [longitude, latitude]);

  return (
    <div className="container mt-3 ">
      <div className={`px-4 ${temp < 20 ? "cold" : "warm"}`}>
        {/* <Buttons /> */}
        <Inputs setLongitude={setLongitude} setLatitude={setLatitude} />
        <Forecast
          data={data}
          longitude={longitude}
          latitude={latitude}
          setTemp={setTemp}
        />
      </div>
    </div>
  );
}

export default App;
