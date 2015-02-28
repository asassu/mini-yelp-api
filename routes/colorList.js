module.exports = function(app, yelp) {

	app.get('/color/list', function(req, res) {

		// See http://www.yelp.com/developers/documentation/v2/search_api
		yelp.search({term: "food", location: "Montreal"}, function(error, data) {
		  //console.log(error);
		  //console.log(data);

		  res.render('colorList.jade', {
	            places: data
	        })
		});

        
    })

}