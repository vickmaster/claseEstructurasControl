let num = 3;

switch(num){
    case 1: console.log(`Num tiene el valor de 1`);
        break;
    case 2: console.log(`Num tiene el valor de 2`);
        break;
    default: console.log(`Num no vale ni 1 ni 2`);
}

switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar`);
        break;
    case 2:
    case 4:
        console.log(`${num} es par`);
        break;
}  

let num1 = 9;
let num2 = 3;
let num3 = 5;

switch(num1 > num2 && num1 > num3 && num2 > num3){
    case true: console.log(`el orden de mayor a menor es ${num1}, ${num2} y ${num3}.`);
    break;
    case false:
        switch(num1 > num2 && num1 > num3 && num3 > num2){
            case true: console.log(`el orden de mayor a menor es ${num1}, ${num3} y ${num2}.`);
            break;
            case false:
                switch(num2 > num1 && num2 > num3 && num1 > num3){
                    case true: console.log(`el orden de mayor a menor es ${num2}, ${num1} y ${num3}.`);
                    break;
                    case false:
                        switch(num2 > num1 && num2 > num3 && num3 > num1){
                            case true: console.log(`el orden de mayor a menor es ${num2}, ${num3} y ${num1}.`);
                            break;
                            case false:
                                switch(num3 > num1 && num3 > num2 && num1 > num2){
                                    case true: console.log(`el orden de mayor a menor es ${num3}, ${num1} y ${num2}.`);
                                    break;
                                    case false:
                                        switch(num3 > num1 && num3 > num2 && num2 > num1){
                                            case true: console.log(`el orden de mayor a menor es ${num3}, ${num2} y ${num1}.`);
                                            break;
                                            case false:
                                        }
                                }
                        }
                }
        }        
}


let num4 = 650;

(num4 % 2 == 0) ? console.log(`${num4} es par`) : console.log(`${num4} es impar.`)