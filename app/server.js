const http = require('http');
const url = require('url');


const app = http.createServer((req, res) => {
    var parsedURL = url.parse(req.url, true);
    var pathName = parsedURL.pathname;
    if (pathName == 'hello/') {
        res.end('Howdy :-)');
    }
});


app.listen(8080, async msg => {
    console.log('app runnign on port 8080')
});
