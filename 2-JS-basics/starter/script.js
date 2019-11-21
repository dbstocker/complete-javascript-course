/*
// clever, but it's an if hydra that will get
// ridiculous as soon as there are more than
// three scenarios.
*/

/* 
let john = [89, 120, 103];
let mike = [116, 94, 123];
let mary = [97, 134, 105];

function getAvg(arr) {
  let score = 0;
  let avg;
  for (i = 0; i < arr.length; i++) {
    score += arr[i];
  }
  avg = score / arr.length;
  return avg;
}

let johnAvg = getAvg(john);
let mikeAvg = getAvg(mike);
let maryAvg = getAvg(mary);

if (johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log('John', johnAvg);
} else if (mikeAvg > maryAvg && mikeAvg > johnAvg) {
  console.log('Mike', mikeAvg);
} else {
  console.log('Mary', maryAvg);
}
*/

/* 
function currentAge(birthYear) {
  return 2019 - birthYear;
}

let ageDavid = currentAge(1976);
let ageJohn = currentAge(1957);
let ageHeather = currentAge(1973);

console.log(ageDavid, ageJohn, ageHeather);

function retirementYear(birthYear, firstName) {
  let age = currentAge(birthYear);
  let retirement = 65 - age;

  let retired = `${firstName} retires in ${retirement} years.`;
  let working = `${firstName} is already retired.`;

  return retirement > 0 ? retired : working;
  // if (retirement > 0) {
  //   return `${firstName} retires in ${retirement} years.`;
  // } else {
  //   return `${firstName} is already retired.`;
  // }
}

let david = retirementYear(1953, 'david');

console.log(david);
*/

/* let mike = {
  firstName: 'Mike',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  occupation: 'teacher',
  isMarried: false,
  age: () => {
    return 2019 - this.birthYear;
  }
};

console.log(mike.age()); */

/* let john = {
  name: 'John Smith',
  height: 1.5,
  weight: 82,
  getBMI: function() {
    return this.bmi = this.weight / (this.height * this.height);
  }
};

let mark = {
  name: 'Mark Smith',
  height: 1.37,
  weight: 84,
  getBMI: function() {
    return this.bmi = this.weight / this.height ** 2;
  }
}

// console.log('mark', mark.getBMI());
// console.log('john', john.getBMI());

function compareBMI(ind1, ind2) {
  if (ind1.getBMI() !== ind2.getBMI()) {
    ind1.bmi > ind2.bmi ?
    console.log(`${ind1.name}'s BMI of ${ind1.bmi} is higher than ${ind2.name}'s BMI of ${ind2.bmi}.`) : console.log(`${ind2.name}'s BMI of ${ind2.bmi} is higher than ${ind1.name}'s BMI of ${ind1.bmi}.`);
  } else {
    console.log('BMIs are the same');
  }
}

compareBMI(mark, john); */

// let john = ['John', 'Smith', 1990, 'designer', false];

// for loop
/* function listParams(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
} */

// while loop
/* function listParams(arr) {
  let i = 0;
  while(i < arr.length) {
    console.log(arr[i]);
    i++;
  }
} */

// continue and break statements
/* function listParams(arr) {
  for (i = 0; i < arr.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(arr[i]);
  }
} */

/* function listParams(arr) {
  for (i = 0; i < arr.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(arr[i]);
  }
} */

// loop in reverse
/* function listParams(arr) {
  for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
 
listParams(john); */

let john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      let tip;
      let bill = this.bills[i];

      if (bill < 50) {
        tip = 0.2;
      } else if (bill >= 50 && this.bills[i] < 200) {
        tip = 0.15;
      } else {
        tip = 0.1;
      }
      this.tips.push(bill * tip);
      this.finalValues.push(bill + bill * tip);
    }
  }
}

let mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      let tip;
      let bill = this.bills[i];

      if (bill < 100) {
        tip = 0.2;
      } else if (bill >= 100 && this.bills[i] < 300) {
        tip = 0.10;
      } else {
        tip = 0.25;
      }
      this.tips.push(bill * tip);
      this.finalValues.push(bill + bill * tip);
    }
  }
}

john.calcTips();
mark.calcTips();
console.log(john, mark);

function tipAvg(tipsArr) {
  let sum = 0;
  for (var i = 0; i < tipsArr.length; i++) {
    sum = sum + tipsArr[i];
  }
  return sum / tipsArr.length;
}

let johnTipAvg = tipAvg(john.tips);
let markTipAvg = tipAvg(mark.tips);

console.log(johnTipAvg, markTipAvg);