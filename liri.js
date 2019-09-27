require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var inquirer = require("inquirer");

var moment = require('moment');

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: "Which movie would you like to search?"
    }

]).then(function (response) {
    console.log(response);
    var movieURL = "http://www.omdbapi.com/?t=" + response.userInput + "&y=&plot=short&apikey=ebe5df1e";


    axios.get(movieURL).then(
        function (response) {
            console.log("Movie title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Country of Production: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);

        }).catch(function (error) {
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

})
// inquirer.prompt([
//         {
//             type: "confirm",
//             message: "Would you like to continue?",
//             name: "confirm",
//             default: true

//         }
//     ])

inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: "Which band would you like to search?"
    }
]).then(function (response) {
    console.log(response);
    var bandURL = "https://rest.bandsintown.com/artists/" + response.userInput + "/events?app_id=codingbootcamp";

    axios.get(bandURL).then(
        function (response) {
            console.log(response);
            console.log(response.data[0].venue);
            console.log("Venue: " + response.data[0].venue.name);
            console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));


        }).catch(function (error) {
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

})

inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: "Which song would you like to look up?"
    }
]).then(function (response) {
    console.log(response);
    var spotifyURL = "https://api.spotify.com/v1/search?query=" + response.userInput + "&offset=0&limit=10&type=";

    axios.get(spotifyURL).then(
        function (response) {
            console.log(response);
            console.log();
            console.log();
            console.log();
            console.log();

        }).catch(function (error) {
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

})

// Notes
//  1) Unfortunately I was not able to get the spotify information. I was not sure if I was meant to use the url in line 114 or the seach example in https://www.npmjs.com/package/node-spotify-api. However the structure of this portion would be the same as the movie and band portions.

// 2) I was not able to put in an endless loop to transition from question to question if the user chose to. Right now with all the code on, all three questions will appear at the same time. You would manually have to comment out two of the questions to get one working.
    // How this endless loop would be done is asking the user to confirm if they want to answer another question at the end of the section just like lines 57-62. This would be done three times. After the third time and going through each section once, if the user wants to answer the questions again, it'll loop back to the start. movies > bands > spotify > movies and so on until the user confirms no.