require('babel-polyfill');
require('babel-register')({
    sourceMap: 'inline',
    presets: ["env", "es2017"],
    plugins: ['transform-async-to-generator'],
    compact: false
});

require('dotenv').config({path: 'env'});
const app = require('./app');
const port = process.env.PORT || process.env.port || 8081;

const server = app.listen(port, () => {
    console.log("Running server in port " + port);
});

module.exports = server;