const input=require('readline-sync')
let a = parseInt(input.question('enter the number a; '))
b = parseInt(input.question('enter the number b; '))
c = parseInt(input.question('enter the number c; '))
d = parseInt(input.question('enter the number d; '))
if (a>b) {
    max=a;
    min=b;
} else {
    max=b;
    min=a;
}
if (c>d) {
    max1=c;
    min1=d;
} else {
    max1=d;
    min1=c;
}
if (max>max1) {
    max2=max
    min2=max1
} else {
    max2=max1
    min2=max
}
if (min>min1) {
    max3=min;
    min3=min1;

} else {
    max3=min1;
    min3=min;
}
if (min2>min3){
    console.log(min2);
}
else{
    console.log(min3);
}