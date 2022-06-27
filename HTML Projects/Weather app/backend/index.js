import fs from 'fs'
import http from 'http'
import fetch from 'node-fetch';
const Apiresponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=3e4c955cdb10428fd983999f59f3b259');
const Apidata = await Apiresponse.json();
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        var data = fs.readFileSync('../frontend/index.html', 'utf-8')
        data = data.replace('{city}', Apidata.name)
        data = data.replace('{temp}', ((Apidata.main.temp) - 273.15).toPrecision(3))
        data = data.replace('{Realtemp}', ((Apidata.main.feels_like) - 273.15).toPrecision(3))
        data = data.replace('{weather}', Apidata.weather[0].main)
        data = data.replace('{mintemp}', ((Apidata.main.temp_min) - 273.15).toPrecision(3))
        data = data.replace('{maxtemp}', ((Apidata.main.temp_max) - 273.15).toPrecision(3))
        data = data.replace('{pressure}', Apidata.main.pressure)
        data = data.replace('{humidity}', Apidata.main.humidity)
        data = data.replace('{speed}', ((Apidata.wind.speed) * 3.6).toPrecision(3))
        data = data.replace('{visibility}', (Apidata.visibility) / 1000)
        data = data.replace('{cover}', Apidata.clouds.all)
        res.write(data)
        res.end()
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/html' })
        res.end('<h1>Error 404</h1>')
    }
})
server.listen(5050, '0.0.0.0', () => {
    console.log("listening to port 5050");
})