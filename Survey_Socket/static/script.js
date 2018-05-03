$(document).ready(
    function(){
        var socket = io.connect();
        $('.userentry').submit(
            function(){
                console.log("in jquery");
                context = {
                name : $('.namebox').val(),
                // location : $('.radio').val(),
                location : $('input[name="location"]:checked').val(),
                favlang : $('.favlang').val(),
                comment : $('.comment').val(),
                };
                console.log("radio", $('input[name="location"]:checked').val());
                console.log("jquery context", context);
                socket.emit('posting_form', context);  
                return false;
            }
        );
        socket.on('result', function(data){
            console.log(data);
            // build html
            var html_str = "";
            html_str +="<h1> You entered the following information to the server</h1>";
            html_str +="<h2>Name: " + data.name + "</h2>";
            html_str +="<h2>Location: " + data.location + "</h2>";
            html_str +="<h2>Favorite Language: " + data.favlang + "</h2>";
            html_str +="<h2>Comment: " + data.comment + "</h2>";
            html_str +="<br>";
            html_str +="<h2>Your lucky number emitted by the server is " + data.luckynum + "</h2>";
            // append to a div
            console.log("html", html_str);
            $("#message").html(html_str);
        });
    }
)