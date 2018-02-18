"use strict";

var express = require("express");

var Monster = require("./monster.model");

var router = express.Router();

router.route("/")
	.get(function(req, res) {
		Monster
			.fetchAll()
			.then(function(monsters) {
				res.json({ monsters });
			});
	});

module.exports = router;

/*const CRYPTO = require("crypto");
const KNEX   = require("knex")(require("./knexfile"));

module.exports = {

	getAll()
	{
		return KNEX("monsters")
			.select("id", "name")
			.from("monsters");
	}

};*/