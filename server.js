var express = require('express')
var path = require('path');
var app = module.exports = express()

app.get('/:urlArg', function(request, response, next) {
  var urlArg = request.params.urlArg
  var date = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  if (isNaN(urlArg)) {
    var normal = new Date(urlArg).toLocaleDateString('en-us', date)
    var unix = new Date(urlArg).getTime() / 1000
  } else {
    var unix = urlArg
    var normal = new Date(urlArg * 1000).toLocaleDateString('en-us', date)
  }
  if (normal == "Invalid Date") {
    normal = null
    unix = null
  }
  response.json({unix: unix, natural: normal})
})

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3000, function() {
  console.log('Listening.')
})