require('dotenv').config();
import mountRoutes from './routes';
const morgan = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/openapi.json');

const app = express();
// use cors
app.use(cors());
// view engine setup
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));

mountRoutes(app);

// Default error handler
app.use(function (err, req, res, next) {

    // logger.error(err.message);

    /* Finaly respond to the request */
    console.log(err);
    return res.status(err.output.statusCode).send(err.output.payload);
});

let port = (process.env.PORTS_API || 58080);
app.listen(port, () => console.log(`API listening on port ${port}!`));
