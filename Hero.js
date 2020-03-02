let Hero = class{
    constructor(name, age, hp){
        this.name = name;
        this.age = age;
        this.hp = hp - age;
        this.inventory = [];
    }
    damage(damageAmount){
        this.hp = this.hp - damageAmount;
    }

    addItem(item){
        this.inventory.push(item);
    }

    inspectInventory(){
        this.inventory.forEach(function(item) {
            item.showInfo();
        })
    }

    repair(index){
        this.inventory[index].repair();
    }
}

module.exports = Hero;