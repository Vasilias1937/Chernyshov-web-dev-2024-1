"use strict";  


let order = {  
    totalPrice: 0,  
    items: []  
};  


function addToOrder(item) {  

    order.items.push(item);  
    order.totalPrice += item.price;  


    updateOrderDisplay();  
}  


function updateOrderDisplay() {  
    const orderContainer = document.querySelector('.block1');  
    orderContainer.innerHTML = '<h2>Ваш заказ:</h2>'; 

    order.items.forEach(item => {  
        orderContainer.innerHTML += `<p>${item.category}: ${item.name} - ${item.price}₽</p>`;  
    });  
    orderContainer.innerHTML += `<p>Итоговая стоимость: ${order.totalPrice}₽</p>`; 

    orderContainer.innerHTML += ` <label for="comments">Комментарии к заказу</label>
                    <textarea id="comments" name="comments"></textarea>`;
}  