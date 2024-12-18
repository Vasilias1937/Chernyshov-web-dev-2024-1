"use strict";  

let order = {  
    totalPrice: 0,  
    items: [],  
    selectedCategories: {} 
};  

function addToOrder(item) {  
    
    if (order.selectedCategories[item.category]) {  
        
        const previousItem = order.selectedCategories[item.category];  
        order.totalPrice -= previousItem.price; 
        order.items = order.items.filter(i => i !== previousItem);  
    }  
    
    order.items.push(item);  
    order.totalPrice += item.price;  
    order.selectedCategories[item.category] = item;  

    updateOrderDisplay();  
}  

function updateOrderDisplay() {  
    const orderContainer = document.querySelector('.block1');  
    orderContainer.innerHTML = '<h2>Ваш заказ:</h2>';   

    if (Object.keys(order.selectedCategories).length > 0) {  
        for (const category in order.selectedCategories) {  
            const selectedItem = order.selectedCategories[category];  
            orderContainer.innerHTML += `<p>Вы выбрали ${category}: <br> <br> ${selectedItem.name} - ${selectedItem.price}₽</p> <br> <br>`;  
        }  
    } else {  
        orderContainer.innerHTML += `<p>Вы еще не сделали заказ.</p>`;  
    }  

    orderContainer.innerHTML += `<p>Итоговая стоимость: ${order.totalPrice}₽</p>`;   
    orderContainer.innerHTML += `<label for="comments">Комментарии к заказу</label>  
                    <textarea id="comments" name="comments"></textarea>`;  
}  


function handleFormSubmit(event) {  
    event.preventDefault(); 

    
    const formData = new FormData(event.target);  
    const orderDetails = {  
        items: order.items.map(item => ({ name: item.name, price: item.price, category: item.category })),  
        totalPrice: order.totalPrice,  
        comments: formData.get('comments'),  
        name: formData.get('name'),  
        email: formData.get('email'),  
        phone: formData.get('phone'),  
        address: formData.get('address'),  
        subscribe: formData.get('subscribe') ? true : false,  
        delivery_time: formData.get('delivery_time'),  
        specific_time: formData.get('delivery-specific-time') || null  
    };  

     
    fetch('https://httpbin.org/post', {  
        method: 'POST',  
        body: JSON.stringify(orderDetails),  
        headers: {  
            'Content-Type': 'application/json'  
        }  
    })  
    .then(response => response.json())  
    .then(data => {  
        console.log('Success:', data);  
        alert('Ваш заказ успешно отправлен!');  

        const newWindow = window.open();  
        newWindow.document.write('<h1>Ваш заказ:</h1>');  
        newWindow.document.write('<pre>' + JSON.stringify(data, null, 2) + '</pre>');  
        newWindow.document.close(); 

        
        resetOrder();  
    })  
    .catch((error) => {  
        console.error('Error:', error);  
        alert('Произошла ошибка при отправке заказа.');  
    });  
}  

function resetOrder() {  
    order = { totalPrice: 0, items: [], selectedCategories: {} };  
    updateOrderDisplay();  
}  

const orderForm = document.getElementById('make-order');  
orderForm.addEventListener('submit', handleFormSubmit);  