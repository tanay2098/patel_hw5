const numbers=[1,2,3,4,5,6,7,8,9,10];


console.log(numbers.filter(x=>x%2!=0));
console.log(numbers.filter(x=>x%2==0 || x%5==0));
console.log(numbers.filter(x=>x%3==0).map(x=>x**2));
console.log(numbers.filter(x=>x%5==0).map(x=>x**2).reduce((sum,value)=>sum+value,0));