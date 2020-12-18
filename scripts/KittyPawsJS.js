basketArray = [];

//button One Event
document.getElementById('btnOne').addEventListener('click', cartButtonOne);
function cartButtonOne(){

    let valueOne = 5.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
//btn Two Event
document.getElementById('btnTwo').addEventListener('click',cartButtonTwo);
function cartButtonTwo(){


    let valueOne = 5.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
//btn Three Event
document.getElementById('btnThree').addEventListener('click',cartButtonThree);
function cartButtonThree(){


    let valueOne = 5.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
//btn Four Event
document.getElementById('btnFour').addEventListener('click',cartButtonFour);
function cartButtonFour(){


    let valueOne = 5.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
//btn Five Event
document.getElementById('btnFive').addEventListener('click',cartButtonFive);
function cartButtonFive(){


    let valueOne = 5.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
//btn Six Event
document.getElementById('btnSix').addEventListener('click',cartButtonSix);
function cartButtonSix(){


    let valueOne = 5.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
document.getElementById('btnSeven').addEventListener('click',cartButtonSeven);
function cartButtonSeven(){


    let valueOne = 8.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
document.getElementById('btnEight').addEventListener('click',cartButtonEight);
function cartButtonEight(){


    let valueOne = 8.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
document.getElementById('btnNine').addEventListener('click',cartButtonNine);
function cartButtonNine(){


    let valueOne = 8.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
document.getElementById('btnTen').addEventListener('click',cartButtonTen);
function cartButtonTen(){


    let valueOne = 8.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
document.getElementById('btnEleven').addEventListener('click',cartButtonEleven);
function cartButtonEleven(){


    let valueOne = 8.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
document.getElementById('btnTwelve').addEventListener('click',cartButtonTwelve);
function cartButtonEleven(){


    let valueOne = 8.50;
    basketArray.push(valueOne);

    cartTotal(basketArray);
}
function cartTotal(myArray){
    
    let sumArray = myArray.reduce((accumlator, currentValue) => {
    return accumlator + currentValue; },0);
 
     localStorage.setItem('basket', JSON.stringify(sumArray));
     
     let basketTotal = localStorage.getItem('basket');
 
     let basketAmount =JSON.parse(basketTotal);
     
     console.log(sumArray);
     
     for(let i=0; i<basketArray.length;i++){
     sum = [i+1];
     }
         
     document.getElementById('basketBtn').innerHTML= `${sum}`;
     
     console.log(sum);

     loadCartData(basketAmount);
     
     }
     function loadCartData(totalBasketAmount){

        document.getElementById('price').innerHTML=`€${totalBasketAmount}`
     }
