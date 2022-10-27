const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  try {
    console.log('error:', error);
    console.log('response status:', response && response.statusCode);
  
  
    if (!args[0]) {
      console.log('please enter a valid breed type.');
    }
  
    const data = JSON.parse(body);
    console.log(data);
  
  } catch (error) {
    console.log(error.message);
  }
  
});

