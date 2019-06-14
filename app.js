const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const userLocation = process.argv[2];
if(userLocation) {
    geocode(userLocation, (err, { latitude, longitude, location}) => {
        if(err) {
            return console.log(err);
        }
        forecast(latitude, longitude, (err, forecastData) => {
            if(err) {
                return console.log(err);
            }
            console.log(location);
            console.log(forecastData);
        });
    });
} else {
    console.log('Please provide a location');
}