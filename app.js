const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const userLocation = process.argv[2];
if(userLocation) {
    geocode(userLocation, (err, data) => {
        if(err) {
            return console.log(err);
        }
        forecast(data.latitude, data.longitude, (err, forecastData) => {
            if(err) {
                return console.log(err);
            }
            console.log(data.location);
            console.log(forecastData);
        });
    });
} else {
    console.log('Please provide a location');
}