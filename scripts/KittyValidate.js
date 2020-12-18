
// Payment Screen
document.getElementById('cardNumber').addEventListener('keyup',cardNumber,false);
     
function cardNumber(){
    let cardNo = document.getElementById('cardNumber');
    if(cardNo.value.length === 16 ){
       cardNo.style.borderColor='green';
    }else if(cardNo.value.length < 16){
        cardNo.style.borderColor='red';
    }
    else if(cardNo.value.length >16){
        cardNo.style.borderColor='red';
    }
}

document.getElementById('cardHolder').addEventListener('keyup',cardName);

function cardName(){
let cardName = document.getElementById('cardHolder');

if(cardName.value.length == 1){
  
}
if(cardName.value.length < 5){
   cardName.style.borderColor='red';
}
else{
   cardName.style.borderColor ='green';
}
}
document.getElementById('cvvNum').addEventListener('keyup',cvvNumber);

function cvvNumber(){
let cvvNumber = document.getElementById('cvvNum');
let cvvCheck = cvvNumber.value.substring(0,2);
if(cvvNumber.value.length <2){
   cvvNumber.style.borderColor='red';
}else if(isNaN(cvvNumber.value.length)){
   cvvNumber.style.borderColor='red';
}
else if(cvvNumber.value.length == 3 && isNaN(cvvNumber.value)){
   cvvNumber.style.borderColor='red';
}
else if(cvvNumber.value != isNaN(cvvNumber.value)){
cvvNumber.style.borderColor='green';
}

}

document.getElementById('phoneNum').addEventListener('keyup', phoneNums);

function phoneNums(){
let phoneValidate = document.getElementById('phoneNum');

if(phoneValidate.value.length < 10){
  phoneValidate.style.borderColor='red';
}else if(phoneValidate.value.length === 10 && isNaN(phoneValidate.value)){
phoneValidate.style.borderColor='red';
}else if (phoneValidate.value.length != isNaN(phoneValidate.value)){
phoneValidate.style.borderColor='green';
 }
}
document.getElementById('postalDetails').addEventListener('keyup', function (){
let postalCode = document.getElementById('postalDetails');
   if(postalCode.value.length[0]!= RegExp('[A-Za-Z]')){
       postalCode.style.borderColor='green';
   }else if(postalCode.value.length <8){
       postalCode.style.borderColor='red';
   }else if(postalCode.value.length ===8){

   }
});

document.getElementById('inputCountry').addEventListener('keyup',function(){
   
   let countryInput = document.getElementById('inputCountry');

   if(countryInput.value.length <=2){
      countryInput.style.borderColor='red';
   }
   else if(countryInput.value.length >4){
      countryInput.style.borderColor='green';
   }
});

document.getElementById('inputTown').addEventListener('keyup', function(){

   let townInput = document.getElementById('inputTown');

   if(townInput.value.length <=2){
      townInput.style.borderColor='red';
   }
   else if(townInput.value.length >2){
      townInput.style.borderColor='green';
   }
});

document.getElementById('postalDetails').addEventListener('keyup', function(){

   let postal = document.getElementById('postalDetails');

   if(postal.value.length <=7){
      postal.style.borderColor='red';
   }
   else if(postal.value.length ==8){
      postal.style.borderColor='green';
   }
});