// Get dependencies
var express = require('express'), 
http = require('http'),
path = require('path'),
bodyParser = require('body-parser'),
expressJwt = require('express-jwt'),
compression = require('compression'),
cors = require('cors');


// Get our API routes
const user = require('./server/routes/user/user');
const reports = require('./server/routes/reports/reports');
const purchase = require('./server/routes/purchase/purchase');
const sales = require('./server/routes/sales/sales');
const expenses = require('./server/routes/expenses/expenses')

const app = express();

// compress all responses
app.use(compression())

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  //res.header('Access-Control-Allow-Origin', 'http://sonalitrader.com');
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept,Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// Set our api routes
app.use('/api/user', user);
app.use('/api/reports', reports);
app.use('/api/purchase',purchase);
app.use('/api/sale',sales);
app.use('/api/expense',expenses);

// Catch all other routes and return the index file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8383';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));