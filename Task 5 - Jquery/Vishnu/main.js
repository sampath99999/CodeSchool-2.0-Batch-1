const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://linkedin-company-data.p.rapidapi.com/serverAlive',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'linkedin-company-data.p.rapidapi.com'
  },
  data: {}
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}