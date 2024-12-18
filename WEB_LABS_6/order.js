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

function showNotification(message) {  
    const notification = document.createElement('div');  
    notification.className = 'notification';  
    notification.innerHTML = `  
        <p>${message}</p>  
        <button class="close-button">Окей 👌</button>  
    `;  
    
    document.body.appendChild(notification);  
    
    // Центрирование уведомления  
    notification.style.position = 'fixed';  
    notification.style.top = '50%';  
    notification.style.left = '50%';  
    notification.style.transform = 'translate(-50%, -50%)';  
    notification.style.zIndex = '1000';  
    notification.style.backgroundColor = '#fff';  
    notification.style.border = '1px solid #ccc';  
    notification.style.padding = '20px';  
    notification.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';  
    
    const closeButton = notification.querySelector('.close-button');  
    closeButton.addEventListener('mouseenter', () => {  
        closeButton.style.backgroundColor = '#007BFF';  
        closeButton.style.color = '#fff';  
    });  

    closeButton.addEventListener('mouseleave', () => {  
        closeButton.style.backgroundColor = '';  
        closeButton.style.color = '';  
    });  

    closeButton.addEventListener('click', () => {  
        document.body.removeChild(notification);  
    });  
}  

function handleFormSubmit(event) {  
    event.preventDefault();   

    // Проверка на наличие выбранных блюд  
    if (order.items.length === 0) {  
        showNotification("Ничего не выбрано. Выберите блюда для заказа");  
        return;  
    }  

    // Проверка на наличие напитков  
    const hasDrink = order.selectedCategories['drink'];  
    if (!hasDrink) {  
        showNotification("Выберите напиток");  
        return;  
    }  

    // Проверка на наличие основного блюда/салата/стартера  
    const hasMainDish = order.selectedCategories['main'] || order.selectedCategories['saladOrStarter']  
    if (!hasMainDish) {  
        showNotification("Выберите главное блюдо/салат/стартер");  
        return;  
    }  

    // Проверка на наличие супа  
    const hasSoup = order.selectedCategories['soup'];  
    if (hasSoup && !hasMainDish) {  
        showNotification("Выберите суп или главное блюдо");  
        return;  
    }  

    // Отправка формы  
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
