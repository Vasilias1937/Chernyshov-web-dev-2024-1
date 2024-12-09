"use strict";  

function displayDishes(type, containerClass) {  
    const containers = document.getElementsByClassName(containerClass);  

    if (containers.length > 0) {  
        const container = containers[0];  
        container.innerHTML = '';  

        // Фильтрация и сортировка блюд  
        const filteredDishes = dish  
            .filter(item => item.category === type)  
            .sort((a, b) => a.name.localeCompare(b.name)); // Сортировка по названию  

        filteredDishes.forEach((item) => {  
            const dishCard = document.createElement('div');  
            dishCard.className = 'menuElement';  

            const img = document.createElement('img');  
            img.src = item.image;  
            img.className = 'menuPicture';  

            const price = document.createElement('p');  
            price.className = 'price';  
            price.innerHTML = item.price + '&#8381;';  

            const name = document.createElement('p');  
            name.className = 'name';  
            name.textContent = item.name;  

            const weight = document.createElement('p');  
            weight.className = 'weight';  
            weight.textContent = item.count;  

            const button = document.createElement('button');  
            button.className = 'addTo';  
            button.textContent = 'Добавить в корзину';  

            button.addEventListener('click', () => addToOrder(item));  

            dishCard.appendChild(img);  
            dishCard.appendChild(price);  
            dishCard.appendChild(name);  
            dishCard.appendChild(weight);  
            dishCard.appendChild(button);  

            container.appendChild(dishCard);  
        });  
    } else {  
        console.error(`Контейнер с классом ${containerClass} не найден.`);  
    }  
}  

displayDishes('soup', 'menuSection1');  
displayDishes('main', 'menuSection2');  
displayDishes('drink', 'menuSection3');  