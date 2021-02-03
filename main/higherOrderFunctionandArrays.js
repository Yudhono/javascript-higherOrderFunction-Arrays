const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// SIMPLE FOR LOOP
for (let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}

// FOREACH
// -> foreach is used to loop an arrray value the function
//    is the same like for loop
// JS ES5 format
companies.forEach(function(company) {
    console.log(company.name);
});
// JS ES6 format
const companyName = companies.forEach(company => company.name);

//console.log(companyName);

// FILTER
// -> create an array filled with all array elements 
//    that passed a condition
let canDrink = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}

// JS ES5 format
const canDrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
});
// JS ES6 format
const canDrink = ages.filter(age => age >= 21);

// filter retail company
// JS ES5 format
const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail'){
        return true;
    }
});
// JS ES6 format
const retailCompanies = companies.filter(company => company.category === 'Retail');


// get eighties companies
// JS ES6 format
const eightiesCompanies = companies.filter(company => 
    (company.start >= '1981') && (company.start <= '1989')
    );

//console.log(eightiesCompanies);

//get companies that lasted 10 years or more
const tenYearsCompanies = companies.filter(company =>
    (company.end - company.start >= 10)
    );

//console.log(tenYearsCompanies);

// MAP
// -> create a new array from an existing array
// create array of company names
const companyName = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});

const companyName = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

const agesSquare = ages.map(function(age) {
    return Math.sqrt(age);
});

const agesSquare = ages.map(age => Math.sqrt(age));

// SORT
// -> The sort functions allows us 
//    to choose the order to sort the array of objects
// sort companies by start year
const sortedCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start){
        return 1;
    } else {
        return -1
    }
});

const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

// SORT AGES
const sortAges = ages.sort(function(a, b) {
    //return a - b; //ascending sort
    return b - a; //descending sort
});

const sortAges = ages.sort((a,b) => b - a);

// REDUCE
// -> Reduce can be customized to do just about anything, 
//    which makes it one of the most useful higher order functions.
//    - flatten a nested arrays
//    - sum an array of numbers
//    - find an average of an array of numbers 
let ageSum = 0
for(let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}

const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

//get total years for all companies
const totalyears = companies.reduce(function(total, company){
    return total+(company.end - company.start);
},0);

const totalyears = companies.reduce((total, company) => total + (company.end - company.start),0);

// combining method
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a - b)
    .reduce((a,b) => a + b, 0);

console.log(combined);

