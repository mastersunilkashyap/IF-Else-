const input=require('readline-sync')
let bs = parseInt(input.question('enter the basic salary; '))
let HRA,DA,Gs;
if (bs<=10000) {
    HRA=bs*20/100;
    DA=bs*80/100;
    Gs=bs+HRA+DA;
    console.log(Gs);
} else {
    if(bs<=20000){
        HRA=bs*25/100;
        DA=bs*90/100;
        Gs=bs+HRA+DA;
        console.log(Gs) ;
    }else{ 
        if(bs>20000){
            HRA=bs*30/100;
            DA=bs*95/100;
            Gs=bs+HRA+DA;
            console.log(Gs);
        }
    }
} 