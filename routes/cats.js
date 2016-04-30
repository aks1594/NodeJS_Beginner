var _ = require('lodash');
var Cat = require('../models/cat.js');

module.exports = function(app){

	app.post('/cat',function(req,res){
		var newCat = new Cat(req.body);
		newCat.save(function(err){
			if(err){
				res.json({info : 'serror occured' , error :err});
			};
			res.json({info : 'cat added successfullly'});
		});
	});

	app.get('/cat',function  (req,res) {
		Cat.find(function(err,cats){
			if(err)
			{
				res.json({info : 'serror occured' , error :err});				
			}
				res.json({info : 'cats found ' , data : cats});

		});
	});

/*	_cats = [];
	app.post('/cat',function(req,res){
		_cats.push(req.body);
		res.json({info : 'cat created successfullly'});
	});

	app.get('/cat',function(req,res){
		res.send(_cats);
	});

	app.put('/cat/:id',function(req,res){

		var index = _.findIndex(
			_cats,
			{
				name : req.params.id
			}
			);
		console.log('index'+ index);
		_.merge(_cats[index],req.body);
		res.json({info : 'cat updated successfulyly'});
	});
*/
}