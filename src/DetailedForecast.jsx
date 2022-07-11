import { getIcon, getTemperatureInCelsius, getTime } from "./utils.js";

function DetailedForecast(props) {
  return props.forecast.map((item) => (
    <ul className="detailedForecast__list" key={item.dt}>
      <li className="detailedForecast__list__time">{getTime(item.dt_txt)}</li>
      <li className="detailedForecast__list__icon">
        {getIcon(item.weather[0].main.toLowerCase())}
      </li>
      <li className="detailedForecast__list__temperature">
        {getTemperatureInCelsius(item.main.temp)}
      </li>
    </ul>
  ));
}
export default DetailedForecast;
