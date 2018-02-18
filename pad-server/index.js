const EXPRESS = require("express");
const BODY_PARSER = require("body-parser");

var monsterRoute = require("./monster/monster.route");

const APP = EXPRESS();

APP.use(EXPRESS.static("public"));
APP.use(BODY_PARSER.json());

// Add headers
APP.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

APP.use("/monster", monsterRoute);

APP.listen(7555, () => {
	console.log("Server running on http://localhost:7555");
});