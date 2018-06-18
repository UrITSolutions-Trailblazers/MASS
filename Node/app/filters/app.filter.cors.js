const cors = require('cors');

const originWhitelist = ['http://localhost:8086/mass', 'https://example.net'];

module.exports = (req, res, next) => {
    console.log('Server info: Request received');

    let origin = req.headers.origin;

    // console.log(req.headers);

    console.log('Origin -> ' + origin);

    if (originWhitelist.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Origin', origin);
    // only allow get requests, separate methods by comma e.g. 'GET, POST'
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,');
    res.setHeader(
        'Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // push through to the proper route
    next();
}