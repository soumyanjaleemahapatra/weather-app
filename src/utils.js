import { ReactComponent as SunSvg } from "./assets/sun.svg";
import { ReactComponent as CloudSvg } from "./assets/cloud.svg";
export function getDay(dateToParse) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date(dateToParse)
  );
}

export function formatDate(dateToParse) {
  const fullDate = new Date(dateToParse);
  const date = fullDate.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    fullDate
  );
  return date + ". " + month;
}

export function getTime(dateToParse) {
  return new Date(dateToParse).toLocaleString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
}
export function getIcon(weatherCondition) {
  if (weatherCondition === "clear") {
    return <SunSvg fill="#FFC700" className="app__svg" />;
  }
  if (weatherCondition === "rain") {
    return <CloudSvg fill="#FFC700" className="app__svg" />;
  }
}

export function getTemperatureInCelsius(temp) {
  return Math.floor(temp - 273.15) + "°";
}
