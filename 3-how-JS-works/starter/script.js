///////////////////////////////////////
// Lecture: Hoisting
// functions
/* calcAge(1970); // <-- hoisted

function calcAge(year) {
  console.log(2019 - year);
}

// retirement(1990); // <-- not hoisted

var retirement = function(year) {
  console.log(65 - (2019 - year));
}

retirement(1976); // <-- used after declaration

// variables
console.log(age);
var age = 46;
console.log(age);

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}

foo();
console.log(age);
 */
///////////////////////////////////////
// Lecture: Scoping


// First scoping example


/* var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
 */



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
/* calcAge(1976);

function calcAge(year) {
  console.log(2019 - year);
  console.log(this);

} */

var john = {
  name: 'John',
  birthYear: 1990,
  calcAge: function() {
    console.log(2019 - this.birthYear);
    console.log(this);
    // function inner() {
    //   console.log(this);
    // }
    // inner();
  }
}

john.calcAge();

var mike = {
  name: 'Mike',
  birthYear: 1976,

}

mike.calcAge = john.calcAge;

mike.calcAge();