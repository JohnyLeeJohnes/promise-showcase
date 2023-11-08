const axios = require("axios");
axios.get("https://random-data-api.com/api/address/random_address")
    .then(response => console.log(response.data.id))
    .catch(error => console.error(error));

axios.get("https://httpstat.us/404")
    .then(response => console.log(response.data))
    .catch(error => console.error(error.message));

console.log("am I first?")