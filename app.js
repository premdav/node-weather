const request = require('request');

const url = 'https://api.darksky.net/forecast/5cdb5976926ebb81e8c7271775692f5c/37.8267,-122.4233';
request({ url, json: true }, (err, res) => {

    const current = res.body.currently;
    console.log(`${res.body.daily.data[0].summary} It is currently ${current.temperature} degrees out. There is a ${current.precipProbability}% chance of rain`);
});

const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJlbWRhdiIsImEiOiJjand2MzNiaWIwMXV2NGJyN3h6YnQxYjI5In0.BIFhEp6su-oIyl0YjnyFaw&limit=1';
request({ url: mapbox, json: true }, (err, res) => {
    console.log(res.body.features[0].center[1], res.body.features[0].center[0]);
});