module.exports = function(app, yelp) {

    app.get('/color/view/:id', function(req, res) {

    	var id = req.params.id;

    	// See http://www.yelp.com/developers/documentation/v2/business
		yelp.business(id, function(error, data) {
		  //console.log(error);
		  //console.log(data);

		  res.render('colorView.jade', {
	            place: data
	      })
		});

        
    })

}
