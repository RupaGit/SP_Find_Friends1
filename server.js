var express = require("express");
var path = require("path");
// var htmlRoutes = require("./app/routing/htmlRoutes");
// require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/', htmlRoutes);
// app.use('/survey', htmlRoutes);

// app.use('/api/friends', apiRoutes);
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  