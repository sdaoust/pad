"use strict";

var bookshelf = require("../bookshelf");

var Monster = bookshelf.Model.extend({
	tableName: "monsters"
});

module.exports = Monster;