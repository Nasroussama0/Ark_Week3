const fs = require('fs');

const cities = [
    { "name": 'New York', "lat": 40.7128, "lng": -74.0060 },
    { "name": 'London', "lat": 51.5074, "lng": -0.1278 },
    { "name": 'Paris', "lat": 48.8566, "lng": 2.3522 },
    { "name": 'Tokyo', "lat": 35.6895, "lng": 139.6917 },
    { "name": 'Sydney', "lat": -33.8651, "lng": 151.2099 },
    { "name": 'Rome', "lat": 41.9028, "lng": 12.4964 },
    { "name": 'Cairo', "lat": 30.0444, "lng": 31.2357 },
    { "name": 'Rio de Janeiro', "lat": -22.9068, "lng": -43.1729 },
    { "name": 'Dubai', "lat": 25.2048, "lng": 55.2708 },
    { "name": 'Rabat', "lat": 34.0209, "lng": -6.8416 }
];

// function selectRandomCity(cities) {
//     const randomIndex = Math.floor(Math.random() * cities.length);
//     return cities[randomIndex];
// }

async function Afficher(){
    try{
        let data = fs.readFileSync("input.txt",'utf8',);

        var city = {};
        for (var i=0;i<cities.length;i++){
            if(data == cities[i].name){
                city = cities[i];
                break
            }
        }
        //fs.unlinkSync(`${city.name}.txt`);
        const Temperature = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`);
        const temp = await Temperature.json();
        console.log(temp);
        fs.writeFileSync(`${city.name}.txt`,`City name : ${city.name} , Temperature : ${temp.current_weather.temperature}`)
        
        // console.log(`City name : ${city.name} , Temperature : ${temp.current_weather.temperature}`);
    }catch(err){
        console.log(err)
    }
}

Afficher();