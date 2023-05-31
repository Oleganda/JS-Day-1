


let myAge = (25);
console.log("Hi my name is Martin"+" "+"and I am"+ " " + (myAge));

//Output only the third player in the console.  The text should be: "The most valuable player of the match is <third_player_name>".

let players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
console.log("The most valuable player of the match is" + " " + (players[2]));

//Write a JavaScript program that will sort the following values alphabetically: Tesla, Audi, Renault, Volvo, Mazda, Fiat and Ferrari.

let auto = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(auto.sort());

//Using different methods, the output should be as follows:
//apple, banana, kiwi, orange
//apple, banana, kiwi

let fruitsOne = ["apple", "banana", "kiwi"];
fruitsOne.push("orange");
console.log(fruits);
fruitsOne.pop();
console.log(fruits);

// Using different methods, the output should be as follows:
//dog, horse, monkey
//cat, dog, horse, monkey

let animals = ["monkey", "horse", "dog"];
console.log(animals.reverse());
animals.unshift("cat");
console.log(animals);

//Create a program that will output each fruit on a separate line in the web browser:

let fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
let newArray = fruits.split("/").join("\n");
console.log(newArray); //first solution
let newText = fruits.replaceAll("/", "\n"); //second solution

//Sum and Multiply the following variables and store the result in one new variable.
//Divide the two results that you got from the arithmetic operations and print the result in the web browser.

let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;
let f = '1';
let g = 15;
let h = 8;
let i = "1";

let newValueC = Number(c);
let newValueD = Number(d);
let newValueF = Number(f);
let newValueI = Number(i);

let totalAmount = (a+b+e+newValueC+newValueD);
console.log(totalAmount);

let totalAmountMultiply = (g*h*newValueI*newValueF);
console.log(totalAmountMultiply);

let totalAmountTwoTasks = (totalAmount/totalAmountMultiply);
document.write(totalAmountTwoTasks);

//Add your name to the end of the array.

let peopleOne = ["Greg", "Mary", "Devon", "James"];
peopleOne.shift ("Greg");
peopleOne.unshift ("Matt");
peopleOne.pop ("James");
peopleOne.push ("Olga");

//Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Anna"

let people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 2, "Elizabeth", "Anna");
console.log(people);

//Select and output the numbers 11, 25, 17, 27 and 0 in the console.

let longArray = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(longArray[1][1]);
console.log(longArray[4][2]);
console.log(longArray[5][3]);
console.log(longArray[2][3]);
console.log(longArray[2][1]);

//Structure the following sentence

let text = ("Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up");
console.log(text.replaceAll("$" ," "));





















