module.exports = function (){
    return {
      add2: function(num1, num2) { 
        console.log("The sum is: ", num1 + num2);
      },
      multiply: function(num1, num2) {
        console.log("The sum is: ", num1 * num2);
      },
      square: function(num) {
        console.log("The sum is: ", num * num);
      },
      random: function(num1, num2) {
        var temp = Math.floor(Math.random() * num2) + num1;
        console.log("The number is: ", temp );
      }
    }
  };