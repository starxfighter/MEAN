var path = require('path');
const http = require('http');
const   fs = require('fs');
module.exports = {

    static_contents: function(request, response){

            var filename = request.url;
            console.log("filename begin", filename)
            if (filename == './'){
                filename = './index.html';
            }
            if(filename == '/cars/new'){
                console.log("yes")
                filename = '/newcar';
            }

            console.log('filename top', filename);
            var ext = path.extname(filename);
            var contentType = 'text/html';
            switch (ext) {
                case '.js':
                    contentType = 'text/javascript';
                    break;
                case '.css':
                    filename = '.' + filename;
                    contentType = 'text/css';
                    break;
                case '.png':
                    filename = '.' + filename;
                    contentType = 'image/png';
                    break;      
                case '.jpg':
                    filename = '.' + filename;
                    contentType = 'image/jpg';
                    break;
                case '':
                    filename = './views' + filename + '.html';
                    break;
            }
            console.log('filename', filename);
            fs.readFile(filename, function(error, content) {
                if (error) {
                        response.writeHead(500);
                        response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                        response.end(); 
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
    }
}