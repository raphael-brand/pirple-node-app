const http = require('http');
const url = require('url');
      
const createHttpTerminator = require('http-terminator');

const app = http.createServer((req, res) => {
    var parsedURL = url.parse(req.url, true);
    var pathName = parsedURL.pathname;
    if(pathName == 'hello/') {
        res.end('Howdy :-)');
    }
});
app.listen(3535, msg => {
    console.log('app runnign on port 3535')
});



const httpTerminator = createHttpTerminator({
      app,
});

await httpTerminator.terminate();
