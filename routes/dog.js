var _ = require('lodash');
var dog = require('../models/dog.js');

module.exports = function(app){

	app.post('/dog',function(req,res){
		var newdog = new dog(req.body);
		newdog.save(function(err){
			if(err){
				res.json({info : 'serror occured' , error :err});
			};
			res.json({info : 'dog added successfullly'});
		});
	});

	app.get('/dog',function  (req,res) {
		dog.find(function(err,dogs){
			if(err)
			{
				res.json({info : 'serror occured' , error :err});				
			}
				res.json({info : 'dogs found ' , data : dogs});

		});
	});

/*	_dogs = [];
	app.post('/dog',function(req,res){
		_dogs.push(req.body);
		res.json({info : 'dog created successfullly'});
	});

	app.get('/dog',function(req,res){
		res.send(_dogs);
	});

	app.put('/dog/:id',function(req,res){

		var index = _.findIndex(
			_dogs,
			{
				name : req.params.id
			}
			);
		console.log('index'+ index);
		_.merge(_dogs[index],req.body);
		res.json({info : 'dog updated successfulyly'});
	});
*/
}