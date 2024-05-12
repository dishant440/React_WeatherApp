import "./App.css";
import Temperature from "./compoents/Temperature";
import Highlights from "./compoents/Highlights";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);

  const api_URL = `https://api.weatherapi.com/v1/current.json?key=e628e78a49ab4bc39f6164314241205&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(api_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city, api_URL]); // Add api_URL as dependency

  return (
    <>
      <div className="flex bg-[#1F213A] h-screen justify-center align-top">
        <div className=" mt-40 w-1/5 h-1/3">
          {weatherData && (
            <Temperature
              city={city}
              setCity={setCity}
              stats={{
                temp: weatherData.current.temp_c,
                condition: weatherData.current.condition.text,
                isDay: weatherData.current.is_day,
                location: weatherData.location.name,
                time: weatherData.location.localtime
              }}
            />
          )}
        </div>
        <div className=" mt-[120px] w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6">
          <h2 className="text-slate-200 text-2xl col-span-2 ">
            Today's Highlights
          </h2>

          {weatherData && (
            <>
              <Highlights
                highlightStates={{
                  windStatus: 'Wind Status',
                  windSpeed:weatherData.current.wind_kph,
                  direction:weatherData.current.wind_dir
                }}
              />
              <Highlights
                highlightStates={{
                  // Pass appropriate data for other instances of Highlights component
                }}
              />
              <Highlights
                highlightStates={{
                  // Pass appropriate data for other instances of Highlights component
                }}
              />
              <Highlights
                highlightStates={{
                  // Pass appropriate data for other instances of Highlights component
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
