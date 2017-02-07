var shoppingCart = [];

var butter = {
    name: "Butter",
    price: .60,
};

var milk = {
    name: "Milk",
    price: 3.00,
};

var eggs = {
    name: "Eggs",
    price: 3.50,
};

shoppingCart.push(milk);
shoppingCart.push(butter);
shoppingCart.push(eggs);

var total=0;

shoppingCart.forEach(function(list) {
    console.log(list.name + " costs $" + (list.price).toFixed(2));
    total += list.price;
});


console.log("All items total $" + total.toFixed(2));
