require("dotenv").config();

var axios = require("axios");

var movieName = process.argv[2];

var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=ebe5df1e";

console.log(queryURL);

axios.get(queryURL).then(
    function (response) {
        console.log("Release Year: " + response.data.Year);
        console.log(response);
    })
    .catch(function (error) {
        if (error.response) {
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            
            console.log("Error", error.message);
        }
        console.log(error.config);
    });



