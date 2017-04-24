$(document).ready(function(){
  var funcFirst = function (){
    var getAnswer = function (){
    return prompt("Enter a sentence");
    };
    var sentence = getAnswer();

    alert (sentence);
    console.log(sentence);

    var str = sentence[0];
    str += sentence[sentence.length-1];

    var upperStr = str.toUpperCase();
    alert(upperStr);
    return upperStr;
  };

 var funcSec =function(upperStr){
  var splitString = upperStr.split("");
  var reverseStr = splitString.reverse();
  var joinStr = reverseStr.join("");

  console.log(joinStr);
  };
    var funcThird = function(){
    var upperS = funcFirst();
    funcSec(upperS);
  }
  funcThird();
});
