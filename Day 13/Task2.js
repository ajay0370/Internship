var arr1=['apple','mango','lemon'];
var arr2=['banana','orange','pinapple'];
var arr=arr1.concat(arr2);
console.log(arr);

arr.splice(2,2);
console.log(arr);

var lis=[3,36,7,4,12];
var ans=lis.sort((a,b)=>a-b);
console.log(ans);

var res=arr1.includes('apple');
console.log(res);

var ind=arr.indexOf('mango');
console.log(ind);