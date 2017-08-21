var express = require('express')
var cors = require('cors')

var app = express()

app.use(cors({credentials: true}))

const PORT = process.env.PORT || 3000

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

app.use(express.static('public'))

app.listen(PORT, function () {
  console.log('Express is running correctly on port ' + PORT)
})
