const input=require('readline-sync')
let year = input.question('enter the year; ')
if(year%4==0){
    if (year%100!==0) {
        console.log('leap year')
    } else { if(year%400==0)
        console.log('leap year')
        else{
            console.log('not a leap year')
        }
    }
}
else{
    console.log('not a leap year')
}
