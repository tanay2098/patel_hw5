const numbers=[1,2,3,4,5,6,7,8,9,10];

const odd_nums=numbers.filter(x=>x%2!=0);
const divisiblity=numbers.filter(x=>x%2==0 || x%5==0);

const div_three=numbers.filter(x=>x%3==0);
const squared_div_three=div_three.map(x=>x**2);
const div_by_five=numbers.filter(x=>x%5==0);
const square_div_five=div_by_five.map(x=>x**2);
const sum=square_div_five.reduce((sum,value)=>sum+value,0);

console.log(`The array of odd numbers is: ${odd_nums}`);
console.log(`The array of numbers divisible by 2 or 5 is: ${divisiblity}`);
console.log(`The array of numbers divisible by 3 squared: ${squared_div_three}`);
console.log(`Sum of squares of the numbers divisible by 5 is:${sum}`);