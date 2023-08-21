const discount = document.getElementById('discount');
const netPrice = document.getElementById('net-price');
const purchaseButton = document.getElementById('purchase-btn');
const discountButton = document.getElementById('discount-btn');




function cardClick(target){
    const clickedItemName = target.childNodes[5].innerText;
    const clickedItemPrice = target.childNodes[7].innerText.split(' ')[0];
    const clickedItemPriceValue = parseFloat(clickedItemPrice);
    const totalPrice= document.getElementById('total-price');



    const newItemContainer = document.getElementById('new-item-container');
    const p = document.createElement('p');
    const serial = newItemContainer.children.length + 1;
    p.innerText = `
    ${serial}. ${clickedItemName}
    `;
    newItemContainer.appendChild(p);
    const currentTotalPrice = parseFloat(totalPrice.innerText);


    const newTotalPrice = currentTotalPrice + clickedItemPriceValue;
    const newTotalPriceValue = newTotalPrice.toFixed(2);
    const discountValue = parseFloat(discount.innerText);
    const netTotalPrice = newTotalPriceValue - discountValue;
    const netTotalPriceValue = netTotalPrice.toFixed(2);
    totalPrice.innerText = newTotalPriceValue;
    netPrice.innerText = netTotalPriceValue; 
    if(newTotalPriceValue > 0){
        purchaseButton.disabled = false;
    }
    if(newTotalPriceValue >= 200){
        discountButton.disabled = false; 
    }
    
}


discountButton.addEventListener('click', function(event){
    let checkCode = event.target.parentNode.childNodes[1].value;
    if(checkCode === "SELL200"){
        const price = parseFloat(document.getElementById('total-price').innerText);
        const discountValue = price * 0.2;
        const netPriceValue = price * 0.8;
        const discountFinalValue = discountValue.toFixed(2);
        const netPriceFinalValue = netPriceValue.toFixed(2);
        discount.innerText = discountFinalValue;
        netPrice.innerText = netPriceFinalValue; 
        event.target.parentNode.childNodes[1].value = '';
    }


})

function clearAll(){
    const totalPrice= document.getElementById('total-price');
    totalPrice.innerText = '0.00';
    discount.innerText = '0.00';
    netPrice.innerText = '0.00'; 
    const newItemContainer = document.getElementById('new-item-container');
    newItemContainer.innerHTML = "";
    discountButton.disabled = true;
    purchaseButton.disabled = true; 

}