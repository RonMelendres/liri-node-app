require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var inquirer = require("inquirer");

// var spotify = new Spotify(keys.spotify);

// console.log(queryURL);

inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: "Which movie would you like to search?"
    } 
]).then(function(response) {
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
            
        }).catch(function(error) {
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
        message: "Which band would you like to search?"
    } 
]).then(function(response) {
    console.log(response);
    var bandURL = "https://rest.bandsintown.com/artists/" + response.userInput + "/events?app_id=codingbootcamp";


    axios.get(bandURL).then(
        function (response) {
            console.log();
            console.log();
            console.log();
    
        }).catch(function(error) {
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
//     {
//         type: "input",
//         name: "userInput",
//         message: "Which song would you like to look up?"
//     } 
// ])

// var spotifyURL = 

// axios.get(spotifyURL).then(
//     function (response) {
//         console.log();
//         console.log();
//         console.log();
//         console.log();
//     }
// )


// Artist(s)


// The song's name


// A preview link of the song from Spotify


// The album that the song is from



