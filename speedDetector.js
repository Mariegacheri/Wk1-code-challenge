let speed  = 90;
let  demeritPoints;
//define the speedcalculator
function speedcalculator(){
    if (speed <= 70){
        return 'Ok';
    }  
    else if(speed > 70){
        demerit =((speed - 70)/5);
    }
    if (demerit > 12){
        return 'Licence suspened';
    }
    return `Demerit points: ${demerit}`;
 };
console.log(speedcalculator());