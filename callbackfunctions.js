// let add=(n1,n2)=>n1+n2;
// function caluclation(a,b,callback){
//     return callback(a,b);
// }
// let result=caluclation(10,3,add);
// console.log(result);
// function substraction(a,b){
//     return a-b;
// }

// let subres=caluclation(10,3,substraction);
// console.log(subres);  


const firstNeg=function(num){
    return num<0;
}
const arr=[1,2,3,5,23,67,-89]

const result=arr.find(firstNeg)
console.log(result);

const index=arr.findIndex(firstNeg);
console.log(index);














