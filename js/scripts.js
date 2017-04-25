$(document).ready(function(){
  var getAnswer = function (){
  return prompt("Enter a sentence");
  };

  var answer = getAnswer();
//console.log(answer);
  var getLetters = function(str){                     //takes the first and the last letters and make them UpperCase
    var letters = str[0] + str[str.length-1];
    return letters.toUpperCase();
  };

  var reverseLetters = function(str){                 //reverses the string
    return str.split("").reverse().join("");
  };

  var concantination = function(answer){
   return (answer.concat(reverseLetters(getLetters(answer)))); //concat input string with reversed part
  };

  var findLetterPosition = function(str){
   return str.charAt((parseInt(str.length/2)));
  };
  var finalResult = (findLetterPosition(answer) + concantination(answer));

  $("h1").click(function(){
    alert (answer);
  });
  
  $("h2").click(function(){
    alert (finalResult);
  });

//alert (reverseLetters(finalResult));

//  var divide = function() {
//     var senlength = parseInt((sentence.length)/2-1);
//     var seven = (sentence[senlength]);
//     return (seven.concat(conCat()));
//
//  };
//  var backward = function() {
//   var splitString = divide().split("");
//   var reverseStr = splitString.reverse();
//   var joinStr = reverseStr.join("");
//   console.log(joinStr);
// };
//
// backward();
//
//   $("h1").click(function() {
//     alert("Greetings");
//   });

  // var getAnswer = function (){
  // return prompt("Enter a sentence");
  // };
  //
  // var sentence = getAnswer();
  //
  // var funcFirst = function (){
  //   console.log(sentence);
  //
  //   var str = sentence[0];
  //   str += sentence[sentence.length-1];
  //
  //   var upperStr = str.toUpperCase();
  //   return upperStr;
  // };
  //
  // var funcSec = function(){
  //   var splitString = funcFirst().split("");
  //   var reverseStr = splitString.reverse();
  //   var joinStr = reverseStr.join("");
  //   console.log(joinStr);
  // };
  //
  //   // funcFirst();
  //   //
  //   // funcSec();
  //
  // var funcThird = function(){
  //
  //   funcSec(funcFirst());
  // };
  //
  //
  // var funcFour = function(){
  //   funcThird();
  //   console.log(sentence);
  //   console.log(sentence.concat(funcSec()));
  // };
  //
  // funcFour();


});
