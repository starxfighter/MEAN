$(document).ready(
    function(){
        var socket = io.connect();
       
        $('.greenbtn').submit(
            function(){
                console.log("green clicked");
                socket.emit('grncolor');
                return false;
            }
        );
        socket.on('rtngreen', function(data){
            $('#wrapper').css("background-color", "green");
        });

        $('.bluebtn').submit(
            function(){
                console.log("blue clicked");
                socket.emit('blecolor');
                return false;
            }
        );
        socket.on('rtnblue', function(data){
            $('#wrapper').css("background-color", "blue");
        });

        $('.pinkbtn').submit(
            function(){
                console.log("pink clicked");
                socket.emit('pnkcolor');
                return false;
            }
        );
        socket.on('rtnpink', function(data){
            $('#wrapper').css("background-color", "pink");
        });

    }
)