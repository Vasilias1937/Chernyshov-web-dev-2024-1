"use strict";

function Eat(keyword, name, price, category, count, image) {
    this.keyword = keyword;
    this.name = name;
    this.price = price;
    this.category = category;
    this.count = count;
    this.image = image;

    this.getKeyword = function() {
        return this.keyword;
    }
}

const dish = [
    new Eat('gaspacho', 'Гаспачо', 195, 'soup', '350г', '/menu/soups/gazpacho.jpg'),
    new Eat('mushroom', 'Грибной суп-пюре', 185, 'soup', '330г', '/menu/soups/mushroom_soup.jpg'),
    new Eat('norwegian', 'Норвежский суп', 270, 'soup', '330г', '/menu/soups/norwegian_soup.jpg'),

    new Eat('fried', 'Жаренная картошка с грибами', 150, 'main', '250г', '/menu/main/friedpotatoeswithmushrooms1.jpg'),
    new Eat('lasagna', 'Лазанья', 385, 'main', '310г', 'menu/main/lasagna.jpg'),
    new Eat('chiken', 'Котлеты из курицы с картофельным пюре', 225, 'main', '280г', '/menu/main/chickencutletsandmashedpotatoes.jpg'),

    new Eat('orangejuise', 'Апельсиновый сок', 120, 'drink', '300мл', '/menu/drinks/orangejuice.jpg'),
    new Eat('applejuise', 'Яблочный сок', 90, 'drink', '300мл', '/menu/drinks/applejuice.jpg'),
    new Eat('carrotjuise', 'Морковный сок', 110, 'drink', '300мл', '/menu/drinks/carrotjuice.jpg')
];
