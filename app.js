var express = require('express')
var app = express()


var _ = require('lodash');

var yelp = require("yelp").createClient({
  consumer_key: "0ZyMoF39-UnoxR9UoMDH9Q", 
  consumer_secret: "pstjrqtLRuEqj8ecYE-xUicSaNo",
  token: "tmNWnQMbNBtKxLhfgqU2hBG-CTPI4lom",
  token_secret: "J7SqmqPC8ERMfXJzmO33KSNvtrg"
});

// use jade as the view engine
app.set('view engine', 'jade')

// set where the static contents are (e.g., css, js)
app.use(express.static(__dirname + '/public'))

// default to index
app.get('/', function(req, res) {
    res.render('index.jade')
})

// load routes for note, account, context
require('./routes/colorView')(app, yelp)
require('./routes/colorList')(app, yelp)


app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})