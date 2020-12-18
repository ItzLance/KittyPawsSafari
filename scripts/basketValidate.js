
document.getElementById('quantityAmount').addEventListener('click', function(){

let quantity = document.getElementById('quantityAmount').selectedIndex;
let itemPrice=5.50;
let finalPrice=0;

 if(quantity ==1){
     finalPrice = quantity *itemPrice;
 }else if(quantity ==2){
    finalPrice = quantity *itemPrice;
 }else if(quantity==3){
    finalPrice = quantity *itemPrice;
 }
   document.getElementById('basketPrice').innerHTML=`€${finalPrice}`;

   document.getElementById('itemDisplayPrice').innerHTML=`€${finalPrice}`;
});