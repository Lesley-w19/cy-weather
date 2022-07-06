import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
import TopDetails from "./components/TopDetails";
import Forecast from "./components/Forecast";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  
  const [longitude, setLongitude] = useState(13.41)
  const [latitude, setLatitude] = useState(52.52)
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
    <div className="App mt-4 py-5">
      <Buttons setLongitude={setLongitude}  setLatitude={setLatitude}/>
      <Inputs />
      <TopDetails data={data} />
      <Forecast data={data}/>
    </div>
  );
}

export default App;
