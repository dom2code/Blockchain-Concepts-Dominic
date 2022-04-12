const http = require('http');
const fs = require('fs');
const path = require('path');
const { start } = require('./distribute.js')

let port = 8080;
const httpServer = http.createServer(requestHandler);
httpServer.listen(port, () => { console.log('server is listening on port ' + port) });

function requestHandler(req, res) {
    
    if (req.url === '/') {
        sendIndexHtml(res);
    } else if (/\/upload\/[^\/]+$/.test(req.url)) {
        saveUploadedFile(req, res)
    } else {
        sendInvalidRequest(res);
    }
}

function sendIndexHtml(res) {
    let indexFile = path.join(__dirname, 'index.html');
    
    fs.readFile(indexFile, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text' });
            res.write('File Not Found!');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(content);
            res.end();
        }
    })
}

function saveUploadedFile(req, res) {
    console.log('saving uploaded file');
    let fileName = path.basename(req.url);
    let file = path.join(__dirname , './' ,fileName)
    console.log('filrname', path.join(__dirname,fileName))
    var array = fs.readFileSync(file).toString().split("\n");
    // for (i in array) {
    //     console.log(array[i]);
    // }
    
    start(array)
    req.pipe(fs.createWriteStream(file));
    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text' });
        res.write('uploaded succesfully');
        res.end();
    })
}

function sendInvalidRequest(res) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.write('Invalid Request');
    res.end();
}




