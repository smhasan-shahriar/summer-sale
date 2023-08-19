function cardClick(target){
    const clickedItemName = target.childNodes[5].innerText;
    const clickedItemPrice = target.childNodes[7].innerText.split(' ')[0];
    const clickedItemPriceValue = parseFloat(clickedItemPrice);
    const totalPrice= document.getElementById('total-price');
    const discount = document.getElementById('discount');
    const netPrice = document.getElementById('net-price');

    const newItemContainer = document.getElementById('new-item-container');
    const p = document.createElement('p');
    const serial = newItemContainer.children.length + 1;
    p.innerText = `
    ${serial}. ${clickedItemName}
    `;
    newItemContainer.appendChild(p);
    const currentTotalPrice = parseFloat(totalPrice.innerText);
    const discountValue = parseFloat(discount.innerText);
    const netPriceValue = parseFloat(netPrice.innerText);

    const newTotalPrice = currentTotalPrice + clickedItemPriceValue;
    const newTotalPriceValue = newTotalPrice.toFixed(2);
    totalPrice.innerText = newTotalPriceValue;
    
}

