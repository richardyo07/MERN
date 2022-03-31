/** @format */

const axios = require('axios');

const HttpError = require('../models/http-error');

const API_KEY = 'AIzaSyCtt5Fnj_0EhelB3DMFBVG-jp5KlYe-nMo';

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );

  const data = response.data;

  if (!data || data.status === 'ZERO_RESULTS') {
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    throw error;
  }

  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAddress;

// const axios = require('axios');

// const HttpError = require('../models/http-error');

// const API_TOKEN =
//   'pk.eyJ1Ijoib29neWEiLCJhIjoiY2t6dGI2ZHdrMHplZTJwcGsxandrY29mNyJ9.WO2gbJzencw6RKNOt1afKw';

// async function getCoordsForAddress(address) {
//   // return {
//   //   lat: 40.7484474,
//   //   lng: -73.9871516
//   // };
//   const response = await axios.get(
//     `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${API_TOKEN}`
//   );

//   const data = response.data;

//   if (!data || data.status === 'ZERO_RESULTS') {
//     const error = new HttpError(
//       'Could not find location for the specified address.',
//       422
//     );
//     throw error;
//   }

//   const coordinates = data.features[0].geometry.coordinates;
//   console.log(coordinates, 'location');
//   return coordinates;
// }

// module.exports = getCoordsForAddress;
