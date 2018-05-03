$(document).ready(
    function(){
        var socket = io.connect();
        var person = prompt("Please enter your name:");
        $('.msgentr').submit(
            function(){
                console.log("person", person);
                context = {
                    person : person,
                    msg : $('.msgtext').val(),
                };
                console.log("send", context);
                socket.emit('enter_msg', context);
                return false;
            }
        );

        socket.on('post_msg_all', function(data){
            console.log('post data', data);
            var html_str = "";
            for(var x in data.messages){
                console.log("what is x", data.messages[x])
                html_str = '<h2>' + data.messages[x] + '</h2>';
                $('#message').append(html_str);
            };
            
        });

        socket.on('post_msg', function(data){
            console.log('post data', data);
            var html_str = "";
                html_str = '<h2>' + data.message + '</h2>';
                $('#message').append(html_str);
        });
    }
)