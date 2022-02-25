import {useEffect} from 'react'
function WeatherGetter() {
    //const apiUrl = 'https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22';
    const makeApiCall = async () => {
        try {
          const response = await fetch('http://localhost:8080/getWeatherData', {mode:'cors'});
          const data = await response.json();
        }
        catch (e) {
          console.log(e)
        }
    }
    useEffect(() => {
       makeApiCall();
    }, [])
    return(
        <div>hello</div>
    ) 
            
}

export default WeatherGetter