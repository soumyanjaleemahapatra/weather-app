import WeatherSummary from "./WeatherSummary";
import CurrentForecast from "./CurrentForecast";
function Header(props) {
  return (
    <div className="header">
      <WeatherSummary city={props.city.name} forecast={props.forecast} />
      <CurrentForecast forecast={props.forecast} />
    </div>
  );
}
export default Header;
