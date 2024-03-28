const input=require('readline-sync')
let a= input.question('enter number a; ')
let b= input.question('enter number a; ')
let c= input.question('enter number a; ')
if(a>b){
    max=a
    min=b
}
else{
    max=b
    min=a
}
if (min>c) {
    max1=max
    min1=c
} else {
    max1=c
    min1=max1
}
console.log(min1)
