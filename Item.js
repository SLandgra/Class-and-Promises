// Creates an Item class constructor
let Item = class{
    // Any data that is passed into the constructor function
    // are the parameters which define the class
    constructor(name, damage, durability, price){
        this.name = name;
        this.damage = damage;
        this.durability = durability;
        this.price = price;
    }
    // Methods acessable on this class are found below.
    repair(){
        this.durability = this.durability + 5;
        return this
    }    

    showInfo(){
        console.log(`${this.name} does this much damage: ${this.damage}` )
    }
}
// Exports the Item Class constructor.
module.exports = Item;