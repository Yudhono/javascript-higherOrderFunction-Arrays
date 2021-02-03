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

// for (let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// FOREACH
// companies.forEach(function(company) {
//     console.log(company.name);
// });

//FILTER
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }


// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

//const canDrink = ages.filter(age => age >= 21);

//filter retail company
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');



//get eighties companies
const eightiesCompanies = companies.filter(company => 
    (company.start >= '1981') && (company.start <= '1989')
    );

//console.log(eightiesCompanies);

//get companies that lasted 10 years or more
const tenYearsCompanies = companies.filter(company =>
    (company.end - company.start >= 10)
    );

//console.log(tenYearsCompanies);

//MAP
// create array of company names
// const companyName = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

//const companyName = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const agesSquare = ages.map(function(age) {
//     return Math.sqrt(age);
// });

//const agesSquare = ages.map(age => Math.sqrt(age));

//SORT
const sortedCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start){
        return 1;
    } else {
        return -1
    }
});

console.log(sortedCompanies);

