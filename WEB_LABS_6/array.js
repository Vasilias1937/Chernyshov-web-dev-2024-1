"use strict";

function Eat(keyword, name, price, category, count, image,kind) {
    this.keyword = keyword;
    this.name = name;
    this.price = price;
    this.category = category;
    this.count = count;
    this.image = image;
    this.kind = kind;

    this.getKeyword = function() {
        return this.keyword;
    }
}

const dish = [
    new Eat('gaspacho', 'Гаспачо', 195, 'soup', '350г', 'menu/soups/gazpacho.jpg','veg'),
    new Eat('mushroom', 'Грибной суп-пюре', 185, 'soup', '330г', 'menu/soups/mushroom_soup.jpg','veg'),
    new Eat('norwegian', 'Норвежский суп', 270, 'soup', '330г', 'menu/soups/norwegian_soup.jpg', 'fish'),
    new Eat('ramen', 'Рамен', 375, 'soup', '425г', 'menu/рамен.jpg','meat'),
    new Eat('tomyam', 'Том-Ям', 650, 'soup', '500г', 'menu/том_ям.jpg','fish'),
    new Eat('chiken-soup', 'Куриный суп', 330, 'soup', '350г', 'menu/куриныйсуп.jpg','meat'),

    new Eat('fried', 'Жаренная картошка с грибами', 150, 'main', '250г', 'menu/main/friedpotatoeswithmushrooms1.jpg','veg'),
    new Eat('lasagna', 'Лазанья', 385, 'main', '310г', 'menu/main/lasagna.jpg','meat'),
    new Eat('chiken', 'Котлеты из курицы с картофельным пюре', 225, 'main', '280г', 'menu/main/chickencutletsandmashedpotatoes.jpg','meat'),
    new Eat('Fish-rice', 'Рыбная котлета с рисом и спаржей', 320, 'main', '270г', 'menu/рыбнаякотлета.jpg','fish'),
    new Eat('Pizza', 'Пицца маргарита', 450, 'main', '470г', 'menu/пицца.jpg','veg'),
    new Eat('Paste', 'Паста с креветками', 340, 'main', '280г', 'menu/пастакреветки.jpg','fish'),

    new Eat('orangejuise', 'Апельсиновый сок', 120, 'drink', '300мл', 'menu/drinks/orangejuice.jpg','c'),
    new Eat('applejuise', 'Яблочный сок', 90, 'drink', '300мл', 'menu/drinks/applejuice.jpg','c'),
    new Eat('carrotjuise', 'Морковный сок', 110, 'drink', '300мл', 'menu/drinks/carrotjuice.jpg','c'),
    new Eat('coffe', 'Капучино', 180, 'drink', '300мл', 'menu/капучино.jpg','h'),
    new Eat('green-tea', 'Зеленый чай', 100, 'drink', '300мл', 'menu/зеленыйчай.jpg','h'),
    new Eat('black-tea', 'Черный чай', 90,  'drink', '300мл', 'menu/черныйчай.jpg','h'),

    new Eat('korean', 'Корейский салат с овощами и яйцом', 330, 'saladOrStarter', '250г', 'menu/корейскийсалат.jpg','veg'),
    new Eat('caesar', 'Цезарь с ципленком', 370, 'saladOrStarter', '220г', 'menu/цезарь.jpg','meat'),
    new Eat('kapreze', 'Капрезе с моцареллой', 350, 'saladOrStarter', '235г', 'menu/капрезе.jpg','veg'),
    new Eat('tuna', 'Салат с тунцом', 480, 'saladOrStarter', '250г', 'menu/салаттунцом.jpg','fish'),
    new Eat('fried-caesar', 'Кортофель фри с соусом цезарь', 280, 'saladOrStarter', '435г', 'menu/картофельфри.jpg','veg'),
    new Eat('fried-cetchup', 'Картофель фри с кетчупом', 260, 'saladOrStarter', '235г', 'menu/картофельфрикетчуп.jpg','veg'),

    new Eat('pahklava', 'Пахлава', 220, 'dessert', '300г', 'menu/пахлава.jpg','s'),
    new Eat('cheaseCacke', 'Чизкейк', 240, 'dessert', '125г', 'menu/чизкейк.jpg','s'),
    new Eat('chockCheaseCacke', 'Шоколадный чизкейк', 260, 'dessert', '125г', 'menu/Шоколадныйчизкейк.jpg','s'),
    new Eat('chockCacke', 'Шоколадный торт', 270, 'dessert', '140г', 'menu/шоколадныйторт.jpg','m'),
    new Eat('donuts3', 'Пончики(3шт)', 410, 'dessert', '350г', 'menu/пончики3.jpg','l'),
    new Eat('donuts6', 'Пончики(6шт)', 650, 'dessert', '700г', 'menu/пончики6.jpg','l'),
];
