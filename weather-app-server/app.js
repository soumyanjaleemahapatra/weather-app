import express from 'express';
const app = express();
import fetch from 'node-fetch';
const apiUrl = 'https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22';
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.get('/', (req, res) => {
    res.send('Server to handle CORS requests of weather app')
})
app.get('/getWeatherData', async (req, res) => {
    const response = await fetch(apiUrl);
    if(response.status === 200) {
        res.json(await response.json());
    }
    
});
app.listen(8080, () => {
    console.log('listening on port 8080')
})

