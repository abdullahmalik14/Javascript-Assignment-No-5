//Chapter No:21
// Q No:01

var userInput = "abcde";
var x =  userInput.toLowerCase();


// Q No:02
var x = "Hello world";
x = x.toLowerCase();

// Q No:03
var y ="Hello world";
 y = y.toUpperCase();

// Q No:04
var x = "Hello world";
var y = x.toLowerCase();

// // Q No:05
var myArray = ["Element1", "Element2", "Element3"];
var elementIndex = 1; 
var lowercaseString = myArray[elementIndex].toLowerCase();
console.log(lowercaseString)

// Q No:06
var x = "My name is Abdullah"; 
var y = x.toUpperCase();
alert(y);

// Q No:07
var cityName = "kaRacHi";
var firstChrc = cityName.slice(0,1).toUpperCase();
var remainChrc = cityName.slice(1).toLowerCase();
var fullWord = firstChrc + remainChrc;
console.log(fullWord);


//Chapter No:22-25
// Q No:01
var sameWords ="captain";
var slicepart = sameWords.slice(1,3);
console.log(slicepart);

// Q No:02
var name = "Abdullah";
var nameLength = name.length;
console.log(nameLength);

// Q No:03
var animal = "elephant";
var seg = animal.slice(2,6);
console.log(seg);

// Q No:04
var firstVar = "Hello world";
var secondVar = firstVar.length;
console.log(secondVar);

// Q No:05
var firstStatement = "Abdullah";
var secondStatement = firstStatement.length;
var sliceStatement = firstStatement.slice(1,-3)
console.log(sliceStatement);


// Q No:06
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);
//  the value of indx be is 3...

// Q No:07
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);
// the value of lst indx be is 16..

// Q No:08
var text = "can i go or not go?";
var indx = text.lastIndexOf("go");
console.log(indx);


// Q No:09
var myString = "Hello, World!";
var indexNum = 8;

if (indexNum >= 0 && indexNum < myString.length) {
  console.log("The segment at index " + indexNum + " exists in myString.");
} 
  
// Q No:10
var text ="abcde";
var charatMethod = text.charAt(2);
//the character in index 2 is "C"....


// Q No:11
var text = "An apple must be eat in a day";
var cha = text.charAt(10);
console.log(cha);
//the character in index 10 is "u"....

// Q No:12
var str = "This is a Bike";
var x = str.charAt(str.length - 1);

console.log(x); 

// Q No:13
var input = "An apple must be eat in a day";
var cha = input.charAt(5);
console.log(cha);
//the character in index 5 is "p"....


// Q No:14
if (myString.charAt(2) === 'X') {

  } 
  
  // Q No:16
  var str = "This is 1 example, 1 and only 1.";
var newStr = str.replace("1", "one");
console.log(newStr);

 // Q No:17
 var x = "i am a bad boy";
var y = x.replace(/a/g, "z");

console.log(y);



//Chapter No:26
 // Q No:01
var roundedNumber = Math.round(5.6); 

 // Q No:02
 var origNum = 5.3;
 var roundNum = Math.ceil(origNum);

 console.log(roundNum);
 

 // Q No:03
 var origNum = 5.7; 
var roundNum = Math.floor(origNum);

console.log(roundNum); 

 // Q No:04
var origNum = 6.5; 
var roundNum = Math.round(origNum);

console.log(roundNum); 


// Q No:05
var origNum = 0.5;
var roundNum = Math.floor(origNum);
console.log(roundNum);

//Chapter 27 (Random Numbers)
// Q No:01
var randomNumbers = Math.random() * 50;
console.log(randomNumbers);

// Q No:02
var newRandomNumber = Math.random();
console.log(newRandomNumber);

// Q No:03
var pseudorandomnumber = (Math.random() * 6) + 1;
var diceNumbers = Math.round(pseudorandomnumber.toFixed(0));
console.log(diceNumbers);

// Q No:04
var result = Math.round(Math.random());
var tossOutcome = result === 1 ? "Heads" : "Tails";
console.log(tossOutcome);


//Chapter 28, 29 (Converting Strings)
// Q No:01
var str = "50"
console.log(Number(str));

// Q No:02
var str = "123"
console.log(Number(str));


// Q No:03
var str = "3.14159";
console.log(Number(str));


// Q No:04
var str = "3456";
var validNum = Number(str);
if(!isNaN(validNum)){
  console.log( validNum )
}


// Q No:05
var number = 56;
var str = number.toString();
console.log(str);


// Q No:06
var number = 42;
var str = number.toString();
console.log(str);

// Q No:07
var decimalNumber = "3.14";
var integerNum = Number(Math.round (decimalNumber));
console.log(integerNum);


//Chapter 30 (Controlling the length of decimals)
// Q No:01
var num = 3.141592653589793;
var newNum = num.toFixed(4);
console.log(newNum);

// Q No:02
var num = 3.141592653589793;
num = Number(num.toFixed(2));


// Q No:03
var num = 123.456789; 

if (num.toFixed(2).toString().length > 4) {

} 

// Q No:04
var num = 123.456789;
alert(num.toFixed(2).toString());


















































