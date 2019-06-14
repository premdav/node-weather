const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/5cdb5976926ebb81e8c7271775692f5c/${lat},${long}`;
    request({ url, json: true }, (err, res) => {
        if(err) {
            const message = 'Unable to connect to weather service';
            callback(message, undefined);
        } else if(res.body.error) {
            const message = 'Unable to get forecast for given location';
            callback(message, undefined);
        } else {
            const current = res.body.currently;
            const summary = res.body.daily.summary;
            const forecast = `${summary} It is currently ${current.temperature} degrees with a ${current.precipProbability} chance of rain.`;
            callback(undefined, forecast);
        }
    })
};

module.exports = forecast;