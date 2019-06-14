const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicHJlbWRhdiIsImEiOiJjand2MzNiaWIwMXV2NGJyN3h6YnQxYjI5In0.BIFhEp6su-oIyl0YjnyFaw&limit=1`;
    request({ url, json: true }, (err, { body }) => {
        if(err) {
            const message = 'Unable to connect to location services';
            callback(message, undefined);
        } else if(body.features.length === 0) {
            const message = 'Unable to find location';
            callback(message, undefined);
        } else {
            const payload = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            };
            callback(undefined, payload);
        }
    });
};

module.exports = geocode;