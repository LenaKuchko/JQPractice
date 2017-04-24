$(document).ready(function(){
  var getAnswer = function (){
  return prompt("Enter_a_sentence");
  };
  var sentence = getAnswer();
  //console.log(getAnswer());
  //console.log(sentence);

  var getLetters = function(){
    var letters = sentence[0] + sentence[sentence.length-1];
    return letters.toUpperCase();
    //console.log(letters);
  };
  var reverseLetters = function(){
    var splitString = getLetters().split("");
    var reverseStr = splitString.reverse();
    var joinStr = reverseStr.join("");
    //console.log(joinStr);
    return joinStr;
  };



 var conCat = function(){
   return (sentence.concat(reverseLetters()));
 };

 var divide = function() {
    var senlength = parseInt((sentence.length)/2-1);
    var seven = (sentence[senlength]);
    console.log(seven.concat(conCat()));

 };

 divide();

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
