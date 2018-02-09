var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here

	var toAdd = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	}

	console.log(toAdd);
	data.friends.push(toAdd);
	res.render("index.handlebars", data);
 }