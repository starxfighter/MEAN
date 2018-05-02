// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
})
app.use(express.static(__dirname + '/static'));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/cats", function(request, response){
    response.render('cats')
});

app.get("/grumpy", function (request, response){
  // hard-coded user data
  var cat_details = {
        name: "Grumpy",
        favfood: "Lemons",
        age: 3,
        sleepspot: ["under the bed", "on the tv"],
        image: 'catfrown.jpg',
  };
  response.render('details', cat_details);
});

app.get("/dwarves", function (request, response){
    // hard-coded user data
    var cat_details = {
        name: "Grumpy, Sneeze, Dopey, Bashful, Happy",
        favfood: "Magic Mushrooms",
        age: "3, 3, 4, 4, 3",
        sleepspot: ["under a mushroom", "in a boot", "in a tree limb", "in a bed"],
        image: 'catgroup.jpg',
  };
  response.render('details', cat_details);
});

app.get("/tiny", function (request, response){
    // hard-coded user data
    var cat_details = {
        name: "Tiny",
        favfood: "Tapas",
        age: 1,
        sleepspot: ["in a coffee mug", "in a pocket"],
        image: 'smallcat.jpg',
  };
  response.render('details', cat_details);
});

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})