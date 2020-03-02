const Item = require("./Item.js");

// Legendary is an extension of Item. It has the same properties as Item
// but also has it's own specific field/method
class Legendary extends Item {
    //Legendary is crafted only using 4 parameters, it does not require durability
    constructor(name, damage, price, effect){
        //Super essentially creates the Item Class within the Legendary class
        //Treat it as new Item(name, damage, 1000000, price)
        super(name, damage, 10000000, price)
        //saves the final portion of the class to the this.effect
        this.effect = effect;
    }
    // This method is only found on the legendary class but still has acess to the name
    // property defined in Item
    showOff(){
        console.log("Hey I got this cool item: " + this.name);
    }
}

module.exports = Legendary;