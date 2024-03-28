const input=require('readline-sync')
let u = parseInt(input.question('enter the electricity unite; '))
if (u<=50){
    tb=u*0.50;
    console.log(tb)
} else {
    if (u<=150) {
        tb=50*0.50+(u-50)*0.75
        sb=tb*20/100;
        tb=tb+sb;
        console.log(tb)
    } else {
        if (u<=250) {
            tb=25+75+(u-150)*1.20;
            sb=tb*20/100;
            tb=tb+sb;
            console.log(tb)
    }else{
        if(u>250){
             
                tb=220+(u-250)*1.50;
                sb=tb*20/100;
                tb=tb+sb;
                console.log(tb)
        }
    }
}}