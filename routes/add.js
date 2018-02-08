var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log(data);
	var newFriend = res.render('index', {
		'name': req.query.name,
		'description': req.query.desciption,
		'imageURL': 'http://lorempixel.com/400/400/people'
	});
	data.friends.push(newFriend);
 }