var r = require('request').defaults({
	json:true
});

var async = require('async');

module.exports = function(app){

	app.get('/pets',function(req,res){

		async.parallel({
			cat : function(callback){

				r({url : 'http://localhost:3000/cat'},function(err,response,body){
					if(err)
					{
						callback({service : 'cat ',error :err});
					}
					if(!err && response.statusCode == 200){
						callback(null,body);
					}
					else
					callback(response.statusCode);
				
				})

				},
			dog: function(callback){

				r({url : 'http://localhost:3001/dog'},function(err,response,body){
					if(err)
					{
						callback({service : 'dog ',error :err});
					}
					if(!err && response.statusCode == 200){
						callback(null,body.data);
					}
					else
					callback(response.statusCode);
				
				})
				}
			},
				
			function(error,results){
				res.json({error : error , result : results});
			});

		});
		
	}