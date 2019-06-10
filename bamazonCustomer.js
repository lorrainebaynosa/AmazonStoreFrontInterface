var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password (for mySQL workbench)
    password: "lazyjack",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

// running application will first display all items available for sale. Display ids, names, and prices of products for sale.
function start() {
    inquirer
        .prompt({
            name: "shopOrExit",
            type: "list",
            message: "Would you like to [SHOP] or [EXIT]?",
            choices: ["SHOP", "EXIT"]
        })
        .then(function (answer) {
            //based on their answer, either call the shop function or end connection
            if (answer.shopOrExit === "SHOP") {
                connection.query("SELECT item_id, product_name, price FROM products",
                    function (err, results) {
                        if (err) throw err;
                        for (var i = 0; i < results.length; i++) {
                            console.log(results[i].item_id + " | " + results[i].product_name + " | " + results[i].price);
                        }
                        console.log("-----------------------------------");
                    });
                shop();
            } else {
                connection.end();
            }
        });
}

// Once the customer sees the products for sale, the app should then prompt users with two messages: 
// 1) ask them the ID of the product they would like to buy.
// 2) ask how many units of the product they would like to buy.
function shop() {
    // query database for all products for sale
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // once you have the products for sale, prompt the user for item they would like to shop 
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].item_id);
                        }
                        return choiceArray;
                    },
                    message: "What is the item_id of the product you would like to buy?"
                },
                {
                    name: "units",
                    type: "input",
                    message: "How many units of the product would like to buy?"
                }
            ])
            .then(function (answer) {
                // get the information of the chosen item
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].item_id === answer.choice) {
                        chosenItem = results[i];
                    }
                }
                // based on their answer (customer has placed the order), your application should check if your store has enough of the product to meet the customer's request (READ)
                connection.query("SELECT * FROM products", function (err, results) {
                    if (err) throw err;
                if (chosenItem.stock_quantity < parseInt(answer.units)) {
                    // If store does not have enough product, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
                    console.log("Insufficient quantity. See if you would like to purchase another products.");
                    start();
                }
                // If store has enough product, you should 1) fulfill the customer's order; 2) update the SQL database to reflect the remaining quantity; and 3) show the customer the total cost of their purchase.
                else {
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: stock_quantity - answer.units
                            },
                            {
                                item_id: chosenItem.item_id
                            }

                        ],
                        // console.log("Total cost of purchase: " + answer.units *  )
                        function (error) {
                            if (error) throw err;
                            console.log("Order placed successfully!");
                            start();
                        }
                    );
                }
            });
    });
});
}
// ALEX, 
// 1. why is stock_quantity undefined if a query is run and entire table is selected?
// 2. for displaying cost, are we allowed to create new table with client id, purchase price for item_id, quantity purchased?

// USE bamazon;
// CREATE TABLE customers (
//     item_id INT NOT NULL AUTO_INCREMENT,
//     product_name VARCHAR(50) NULL,
//     purchase_price DECIMAL(10,2) NULL,
//     purchase_quantity INT NULL,
//     PRIMARY KEY (item_id)
//   );