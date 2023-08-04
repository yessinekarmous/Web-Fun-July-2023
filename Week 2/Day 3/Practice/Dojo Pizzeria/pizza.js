function pizzaOven(crustType,sauceType,cheeses,toppings) {
        var pizza= {}
        pizza.crustType=crustType
        pizza.sauceType=sauceType
        pizza.cheeses=cheeses
        pizza.toppings=toppings
        return pizza;
}

var pizza1=pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"])
console.log(pizza1)
var pizza2=pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)

console.log("************")

const crustType=["deep dish","hand tossed","Chicago-style","Neapolitan pizza"]
const sauceType=["traditional","marinara","Pesto Sauce","Creamy Alfredo Sauce"]
const cheeses=[["mozzarella"],["mozzarella", "feta"],["feta","Ranch"],["Taco Pizzas with Salsa and Refried Beans"]]
const toppings=[["pepperoni"],["sausage" , "mushrooms"], ["olives", "onions"],["Onion","Black olive"],["Green pepper"]]

function randomNumber(a){
    return Math.floor(Math.random()*a)
}
function pizzaGenerator(){
    var pizza={}
    pizza.crustType=crustType[randomNumber(crustType.length)]
    pizza.sauceType=sauceType[randomNumber(sauceType.length)]
    pizza.cheeses=cheeses[randomNumber(cheeses.length)]                                                                                                                                   
    pizza.toppings=toppings[randomNumber(toppings.length)]
    return pizza
}

var randomPizza=pizzaGenerator()
console.log(randomPizza)