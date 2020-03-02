//require any node packages into our js file
const inquirer = require("inquirer");

//require all of our classes found and defined in other files
const Item = require("./Item.js");
const Hero = require("./Hero.js")
const Legendary = require("./Legendary.js");

/*
Example of how require works.
'require' will run the js file inside of this file and do any operations.
Having a require that does not belong to any variable will still run the js
*/
require("./sayHello.js");


// -------------------Class Section-------------------

//Creating an array of Item class instances defined in Item.js
const items = [
    new Item("sword", 10, 10, 5),
    new Item("bow", 7, 10, 5),
    new Item("potion", 0, 1, 2)
];

// Verifications that the new Items are classes
// console.log(items);
// console.log(items[0].repair());


// Creating Hero class instances defined in Hero.js
const Daniel = new Hero("Daniel", 300, 150);
const Tyler = new Hero("Tyler", 73, 300);
const Javier = new Hero("Javier", 16, 225);

// Demonstrating how the Item class and Hero classes can interact
// Daniel.addItem(items[2]);
// Daniel.addItem(new Item("staff", 10, 10, 5));
// Daniel.inspectInventory();

// Creating a Legendary Item class instance
const frostmourne = new Legendary("Frostmourne", 150, 30000, "It freezes people");

// Demonstrating that the Legendary Item can still be used like an Item instance
// while also being part of it's own Legendary class instance

// Tyler.addItem(frostmourne);
// Tyler.inspectInventory();
// Tyler.inventory[0].showOff();


// -------------------Promise Section-------------------

//Creating the questions for the inquirer package
const questions = [
    {
        type: "input",
        name: "item",
        message: "What item do we want to give Javier?"
    },
    {
        type: "input",
        name: "price",
        message: "What's the price?"
    },
    {
        type: "input",
        name: "damage",
        message: "What's the damage?"
    },
    {
        type: "confirm",
        name: "addAnother",
        message: "Add another item?"
    }
]

//Creating a error handling function for my catch blocks
const handleError = (err) => {
    console.log(err);
}

//Creating a function to handle a response from a promise
const handleResponse = (data) => {
    // Creating a new class Item instance from the response data
    Javier.addItem(new Item(data.item, data.damage, 10, data.price));
    if(data.addAnother) {
        // Calls inquirer again if we want to add more items. Uses the same functions
        // For response and error handling
        inquirer.prompt(questions).then(handleResponse).catch(handleError)
    } else {
        // Exits out of the loop if no more items are to be added
        console.log("No more items for Javier >:(")
    }
}
// Starts the inquirer loop. Inquirer returns a promise
// inquirer.prompt(questions).then(handleResponse).catch(handleError);

// Creating a custom promise this promise takes in a number and resolves
// the value - 1 if it's above 5 otherwise it rejects and returns a 5.
const custom = (input) => {
    // Promises always have a resolve and a reject
    // Resolve it the data which is passed in a .then() or saved in a 'try'
    // Reject is the data which is passed in a catch
    return new Promise((resolve, reject) => {
        if(input > 5) {
            // setTimeout simmulates an aysnc block of code
            setTimeout(function(){
                //resolves the data and returns input -1
                resolve(input - 1)
            }, 2000)
        } else {
            //rejects the data and returns the 5 value
            reject(5);
        }
    })
};

// Using multiple different promises in a row
const handler = (num)=>{
    //runs custom again after the initial promise
    custom(num)
    .then((numb)=>{
        //runs another promise in this .then block
        inquirer.prompt([{type: "input", name: "output", message: "Message here"}])
        .then((data)=>{
            //shows that the scope of numb is still within this promise along with the data from inquirer
            console.log(data)
            console.log(numb)
        })
    })
    //always have a catch block after any async code block
    .catch((err)=>{
        console.log(err)
    })
}

custom(7).then(handler);
