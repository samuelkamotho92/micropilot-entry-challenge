const countZeros = (A)=>{
 let zerovalues = A.filter( item => item === 0);
 return zerovalues.length;
};
let itemArray = [1,0,5,6,0,2];
console.log(countZeros(itemArray));

