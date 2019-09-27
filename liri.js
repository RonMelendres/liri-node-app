require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var inquirer = require("inquirer");

// var spotify = new Spotify(keys.spotify);

var movieName = process.argv[2];

var movieURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=ebe5df1e";

// console.log(queryURL);

axios.get(movieURL).then(
    function (response) {
        console.log("Movie title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Country of Production: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        // console.log(response);
});
    // .catch(function (error) {
    //     // if (error.response) {
    //     //     console.log("---------------Data---------------");
    //     //     console.log(error.response.data);
    //     //     console.log("---------------Status---------------");
    //     //     console.log(error.response.status);
    //     //     console.log("---------------Status---------------");
    //     //     console.log(error.response.headers); }
    //      if (error.request) {
    //         // console.log(error.request);
    //     } else {
            
    //         // console.log("Error", error.message);
    //     }
    //     // console.log(error.config);
    // });












// var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// axios.get(bandURL).then(
//     function (response) {
//         console.log();
//         console.log();
//         console.log();
        
//     }
// )















// var inputArr = process.argv;

// // Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
// var operand = inputArr[2];
// var num1 = inputArr[3];
// var num2 = inputArr[4];


// // var num1 = parseFloat(inputArr[3]);
// // var num2 = parseFloat(inputArr[4]);


// // Here's the variable we will be modifying with the new numbers
// var outputNum;

// // Determines the operand selected...
// // Based on the operand we run the appropriate math on the two numbers
// switch (operand) {
// case "add":
//   outputNum = parseFloat(num1) + parseFloat(num2);
//   break;









