"use strict";  

let currentFilters = {};

function displayDishes(type, containerClass, kind = null) {  
    const containers = document.getElementsByClassName(containerClass);  
    let buttons = [];
    if (containers.length > 0) {  
        const container = containers[0];  
        container.innerHTML = '';  

        // Filtration and sorting of dishes  
        let filteredDishes = dish.filter(item => item.category === type);  

        if (kind) {  
            filteredDishes = filteredDishes.filter(item => item.kind === kind);  
        }  

        filteredDishes = filteredDishes.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name  

        filteredDishes.forEach((item) => {  
            const dishCard = document.createElement('div');  
            dishCard.className = 'menuElement';  
            dishCard.data = item.category;  

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

            button.addEventListener('click', () => {
                if (buttons.length > 0) {
                    buttons[0].textContent = "Добавить в корзину";
                    buttons = [];
                }
                buttons.push(button);
                button.textContent = 'Добавленно'
                addToOrder(item)});  

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

document.querySelectorAll('.sortButton').forEach(button => {  
    button.addEventListener('click', (event) => {  
        const kind = event.target.getAttribute('data-kind');  
        const menuSection = event.target.closest('.menuSection');  
        const type = menuSection.getAttribute('data-type');  
        const containerClass = menuSection.getAttribute('data-container');  
 
        const isActive = event.target.classList.contains('active');  

        menuSection.querySelectorAll('.sortButton').forEach(btn => btn.classList.remove('active'));  

        if (isActive) {  
            currentFilters[type] = null; // Reset filter  
        } else {  
            event.target.classList.add('active');  
            currentFilters[type] = kind;  
        }  

        // Fetch the currently active filter for the type  
        const appliedKind = currentFilters[type];  

        displayDishes(type, containerClass, appliedKind);  
    });  
});  

displayDishes('soup', 'menuSection1');  
displayDishes('main', 'menuSection2');  
displayDishes('drink', 'menuSection3');  
displayDishes('saladOrStarter', 'menuSection4');  
displayDishes('dessert', 'menuSection5'); 