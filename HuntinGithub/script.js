$(document).ready(
    function(){
        $('.userentry').submit(
            function(){
                mySource = $('#name').val();
                console.log('in submit');
                $.get("https://api.github.com/users/" + mySource, displayName, "json");  
                
                
                function displayName(data) {
                console.log(data);
                var html_str = "";
                html_str += "<h1> User Name: </h1>";
                html_str += '<h3>' + mySource + "</h3>";
                html_str += "<h1> Login </h1>";
                html_str += "<h3>" + data.name + "</h3>";
                $(".selector").html(html_str);}
                return false;
        })
})