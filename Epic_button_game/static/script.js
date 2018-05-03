$(document).ready(
    function(){
        var socket = io.connect();
        $('.btncount').submit(
            function(){
                console.log("clicked the count button");
                socket.emit('counting');
                return false;
            }
        );
        socket.on('result', function(data){
            // console.log('result', data);
            var html_str = "";
            html_str +="<h1>The button has been pushed: </h1>";
            html_str +="<h2>" + data.counter + " time(s)!</h2>";
            $('#header').html(html_str);
        });
        $('.btnreset').submit(
            function(){
                console.log("clicked the reset button");
                socket.emit('reset');
                return false;
            }
        );
        socket.on('zero', function(data){
            // console.log("zero data", data);
            var html_str = "";
            html_str +="<h1>The button has been reset to: </h1>";
            html_str +="<h2>" + data.counter + " time(s)!</h2>";
            $('#header').html(html_str);
        });
    }
)