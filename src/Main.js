import { useEffect, useState } from "react";
import DetailedForecast from "./DetailedForecast";
import Header from "./Header";
import { formatDate } from "./utils";
function Main() {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    if (window.localStorage !== undefined) {
      const data = window.localStorage.getItem("weatherData");
      // get weather data if local storage empty or if available data is old
      if (
        !data ||
        (data &&
          formatDate(JSON.parse(data).list[0].dt_txt) ===
            formatDate(new Date()))
      ) {
        window.localStorage.removeItem("weatherData");
        getWeatherData();
      } else {
        setWeatherData(JSON.parse(data));
      }
    }
  }, []);
  const getWeatherData = async () => {
    try {
      const response = await fetch("http://localhost:8080/getWeatherData", {
        mode: "cors",
      });
      const data = await response.json();
      localStorage.setItem("weatherData", JSON.stringify(data));
      setWeatherData(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {weatherData.list && (
        <>
          {weatherData.city && (
            <Header forecast={weatherData.list} city={weatherData.city} />
          )}
          <div className="detailedForecast">
            <DetailedForecast forecast={weatherData.list} />
          </div>
        </>
      )}
    </>
  );
}

export default Main;
