// Import the readline module for handling user input in the console

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, // Read from standard input (keyboard)
    output: process.stdout // Write to standard output (console)
});
let grocery_list = [];

let grocery_item = { "name": "name", "quantity": 10, "price": 5.0, "bought": false };
let grocery_item2 = { "name": "name2", "quantity": 10, "price": 5.0, "bought": false };
let grocery_item3 = { "name": "name3", "quantity": 10, "price": 5.0, "bought": false };
grocery_list.push(grocery_item);
grocery_list.push(grocery_item2);
grocery_list.push(grocery_item3);

function menu() {
    console.log("Menu");
    console.log("1 - Add Grocery");
    console.log("2 - Display Grocery");
    console.log("3 - Remove Grocery");
    console.log("4 - Exit");
}
menu();
function add_grcoery(name, quantity, price, bought) {
    let grocery_item = { "name": name, "quantity": quantity, "price": price, "bought": bought };
    grocery_list.push(grocery_item);
}
rl.on('line', (line) => {


    switch (line) {
        case "1":
            rl.question("Enter Name: ", (name) => {
                rl.question("Enter Quantity:", (quantity) => {
                    rl.question("Enter Price: ", (price) => {
                        rl.question("Enter Bought (Y/N): ", (bought) => {
                            let bought_ans;
                            if (bought.toLowerCase() == "y") {
                                bought_ans = true;
                            } else {
                                bought_ans = false;
                            }

                            add_grcoery(name, parseInt(quantity), parseFloat(price), bought_ans);
                            menu();
                        });
                    });
                });
            });
            break;
        case "2":
            for (i in grocery_list) {
                console.log("ID: " + i);
                console.log("Name: " + grocery_list[i].name);
                console.log("Quantity: " + grocery_list[i].quantity);
                console.log("Price: " + grocery_list[i].price);
                console.log("Bought: " + grocery_list[i].bought);
                console.log(" ");
            }
            menu();
            break;

        case "3":

            for (i in grocery_list) {
                console.log("ID: " + i);
                console.log("Name: " + grocery_list[i].name);
                console.log("Quantity: " + grocery_list[i].quantity);
                console.log("Price: " + grocery_list[i].price);
                console.log("Bought: " + grocery_list[i].bought);
                console.log(" ");
            }
            rl.question("Enter ID: ", (id) => {
                grocery_list.splice(parseInt(id), 1);
            });
            for (i in grocery_list) {
                console.log("ID: " + i);
                console.log("Name: " + grocery_list[i].name);
                console.log("Quantity: " + grocery_list[i].quantity);
                console.log("Price: " + grocery_list[i].price);
                console.log("Bought: " + grocery_list[i].bought);
                console.log(" ");
            }
            menu();
            break;

        case "4":
            console.log("Goodbye");

            rl.once('close', () => {
                process.exit;

            });
            break;
        default:
            console.log("Goodbye");

            rl.once('close', () => {
                process.exit;

            });
    }
});
