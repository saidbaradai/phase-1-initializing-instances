// Write your code here

console.log(4);
// Breakfast class
class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

let breakfast = new Breakfast("eggs", "juice") 

// Lunch class
class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let lunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea")

// Dinner class
class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}

let dinner = new Dinner("balsamic salad", "consomme", "filet mignon", "cheese cake")
