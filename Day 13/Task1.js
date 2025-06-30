var fruits=['apple','banana','cherry','orange','mango']
console.log(fruits[2]);
fruits.push('pineapple');
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits.length);
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
fruits.reverse();
console.log(fruits);
var nums=[1,2,3,4,5];
let sm=0;
for(let j=0;j<nums.length;j++){
    sm+=nums[j];
}
console.log(sm);

