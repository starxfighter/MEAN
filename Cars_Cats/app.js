var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    console.log('requested url: ', request.url);

    if(request.url === '/cars'){
        console.log('inside if')
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();
        });
    } 
    else if (request.url === '/cars/new'){
        fs.readFile('./views/newcar.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/blackcar.jpg'){
        fs.readFile('./images/blackcar.jpg', function(errors,contents){
            response.writeHead(200, {'Content-Type' : 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/orangecar.jpg'){
        fs.readFile('./images/orangecar.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/redcar.jpg'){
        fs.readFile('./images/redcar.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/smallcat.jpg'){
        fs.readFile('./images/smallcat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/catfrown.jpg'){
        fs.readFile('./images/catfrown.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/catgroup.jpg'){
        fs.readFile('./images/catgroup.jpg', function(errors, contents){
            response.writeHead(200, {'Content-Type' : 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-Type' : 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-Type' : 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.end('File not found');
    }
});

server.listen(7077);

console.log("Running in localhost at port 7077");