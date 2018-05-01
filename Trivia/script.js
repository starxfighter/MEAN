$(document).ready(
    function(){
        var score = 0;
        $.get("https://opentdb.com/api.php?amount=3&category=22&difficulty=easy&type=multiple", displayData);
        function displayData(data){
            for(let x = 0; x < data.results.length; x++){
                var target = 0;
                newdiv = '<div class=q' + (x+1) + "><h2>" + data.results[x].question + '</h2><form id="form' + (x+1) + '"><br><input type="radio" name="guess" value="true">' + data.results[x].correct_answer + '<br> <input type="radio" name="guess" value="false">' + data.results[x].incorrect_answers[0] + '<br><input type="radio" name="guess" value="false">' + data.results[x].incorrect_answers[1] + '</form>'; 
                target = x + 1;
                $(".ques" + target).append(newdiv);
                $(".q" + target).css('display', 'none');
            }
        }

        $.get("https://opentdb.com/api.php?amount=3&category=11&difficulty=easy&type=boolean", displayData2);
        function displayData2(data){
            console.log(data)
            for(let x = 0; x < data.results.length; x++){
                var alternate = "False";
                if(data.results[x].correct_answer == 'True'){
                    alternate = "False"
                } else {
                    alternate = "True"
                }
                newdiv = '<div class=q' + (x+4) + "><h2>" + data.results[x].question + '</h2><form id="form' + (x+4) + '"><br><input type="radio" name="guess" value="true">' + data.results[x].correct_answer + '<br> <input type="radio" name="guess" value="false">' + alternate + '<br></form>'; 
                let target = x + 4;
                $(".ques" + target).append(newdiv);
                $(".q" + target).css('display', 'none');
            }
        }

        $.get("https://opentdb.com/api.php?amount=3&category=18&difficulty=easy&type=multiple", displayData3);
        function displayData3(data){
            for(var x = 0; x < data.results.length; x++){
                newdiv = '<div class=q' + (x+7) + "><h2>" + data.results[x].question + '</h2><form id="form' + (x+7) + '"><br><input type="radio" name="guess" value="true">' + data.results[x].correct_answer + '<br> <input type="radio" name="guess" value="false">' + data.results[x].incorrect_answers[0] + '<br><input type="radio" name="guess" value="false">' + data.results[x].incorrect_answers[1] + '</form>';
                var target = x + 7;
                $(".ques" + target).append(newdiv);
                $(".q" + target).css('display', 'none');
            }
        }

        $(document).on('click', '.ques1', 
        function(){
            $(this).children('h1').hide();
            // console.log( $(this).children('.q1').children('h2'))
            $(this).children('.q1').css('display', 'block');
        })
        $(document).on('click', '.ques2', 
        function(){
            $(this).children('h1').hide();
            // console.log( $(this).children('.q2').children('h2'))
            $(this).children('.q2').css('display', 'block');
        })
        $(document).on('click', '.ques3', 
        function(){
            $(this).children('h1').hide();
            // console.log( $(this).children('.q3').children('h2'))
            $(this).children('.q3').css('display', 'block');
        })

        $(document).on('click', '.ques4', 
        function(){
            $(this).children('h1').hide();
            // console.log( $(this).children('.q4').children('h2'))
            $(this).children('.q4').css('display', 'block');
        })
        $(document).on('click', '.ques5', 
        function(){
            $(this).children('h1').hide();
            // console.log( $(this).children('.q5').children('h2'))
            $(this).children('.q5').css('display', 'block');
        })
        $(document).on('click', '.ques6', 
        function(){
            $(this).children('h1').hide();
            // console.log( $(this).children('.q6').children('h2'))
            $(this).children('.q6').css('display', 'block');
        })

        $(document).on('click', '.ques7', 
        function(){
            $(this).children('h1').hide();
            // console.log( $(this).children('.q7').children('h2'))
            $(this).children('.q7').css('display', 'block');
        })
        $(document).on('click', '.ques8', 
        function(){
            $(this).children('h1').hide();
            // console.log( $(this).children('.q8').children('h2'))
            $(this).children('.q8').css('display', 'block');
        })
        $(document).on('click', '.ques9', 
        function(){
            $(this).children('h1').hide();
            // console.log( $(this).children('.q9').children('h2'))
            $(this).children('.q9').css('display', 'block');
        })

        $(document).on('click', '#form1', 
        function(){
            console.log("clicked the form")
            guess = $('#form1').serializeArray();
            if(guess[0].value == 'true'){
                score += 100;
                $(this).css('background-color', 'grey');
                $('#score').text(score + "Points");
                console.log("score", score)
             }else{
                $(this).css('background-color', 'red');   
             }
        })

        $(document).on('click', '#form2', 
        function(){
            console.log("clicked the form")
            guess = $('#form2').serializeArray();
            if(guess[0].value == 'true'){
                score += 200;
                $(this).css('background-color', 'grey');
                console.log("score", score)
                $('#score').text(score + "Points");
             }else{
                $(this).css('background-color', 'red');   
             }
        })

        $(document).on('click', '#form3', 
        function(){
            console.log("clicked the form")
            guess = $('#form3').serializeArray();
            if(guess[0].value == 'true'){
                score += 300;
                $(this).css('background-color', 'grey');
                console.log("score", score)
                $('#score').text(score + "Points");
             }else{
                $(this).css('background-color', 'red');   
             }
        })

        $(document).on('click', '#form4', 
        function(){
            console.log("clicked the form")
            guess = $('#form4').serializeArray();
            if(guess[0].value == 'true'){
                score += 100;
                $(this).css('background-color', 'grey');
                console.log("score", score)
                $('#score').text(score + "Points");
             }else{
                $(this).css('background-color', 'red');   
             }
        })

        $(document).on('click', '#form5', 
        function(){
            console.log("clicked the form")
            guess = $('#form5').serializeArray();
            if(guess[0].value == 'true'){
                score += 200;
                $(this).css('background-color', 'grey');
                console.log("score", score)
                $('#score').text(score + "Points");
             }else{
                $(this).css('background-color', 'red');   
             }
        })

        $(document).on('click', '#form6', 
        function(){
            console.log("clicked the form")
            guess = $('#form6').serializeArray();
            if(guess[0].value == 'true'){
                score += 300;
                $(this).css('background-color', 'grey');
                console.log("score", score)
                $('#score').text(score + "Points");
             }else{
                $(this).css('background-color', 'red');   
             }
        })

        $(document).on('click', '#form7', 
        function(){
            console.log("clicked the form")
            guess = $('#form7').serializeArray();
            if(guess[0].value == 'true'){
                score += 100;
                $(this).css('background-color', 'grey');
                console.log("score", score)
                $('#score').text(score + "Points");
             }else{
                $(this).css('background-color', 'red');   
             }
        })

        $(document).on('click', '#form8', 
        function(){
            console.log("clicked the form")
            guess = $('#form8').serializeArray();
            if(guess[0].value == 'true'){
                score += 200;
                $(this).css('background-color', 'grey');
                console.log("score", score)
                $('#score').text(score + "Points");
             }else{
                $(this).css('background-color', 'red');   
             }
        })

        $(document).on('click', '#form9', 
        function(){
            console.log("clicked the form")
            guess = $('#form9').serializeArray();
            if(guess[0].value == 'true'){
                score += 300;
                $(this).css('background-color', 'grey');
                console.log("score", score)
                $('#score').text(score + "Points");
             }else{
                $(this).css('background-color', 'red');   
             }
        })

        $(document).on('click', '.newques', 
        function(){
            location.reload();
        })
    }
)
