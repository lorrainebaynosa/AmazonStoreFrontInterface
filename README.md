# AmazonStoreFrontInterface
AmazonStoreFrontInterface creates an Amazon-like storefront that takes in orders from customers and depletes stock from the store's inventory. SQL statements will be used to create the schema (structure for the database), while npm packages inquire and mysql will be used to prompt customers for answers; and query and update the database stored/displayed in MySQLworkbench, respectively. 

AmazonStoreFrontInterface is a Command Line Interface(CLI) application that takes in user input and returns data. Screenshots will be displayed showing typical user flow through the application (customer), including prompts and responses after various selections.

CUSTOMER VIEW: 
Definitions for column names: 
   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
   * stock_quantity (how much of the product is available in stores)

In mySQLWorkbench, the code for creating the products table within the bamazon database (bamazon.products):



<img src="images/bamazon_products.jpg" width="800">
![](images/bamazon_products.jpg)




In mySQLWorkbench, populating the products table with products:



<img src="images/bamazon_products_original_inventory.jpg" width="800">
![](images/bamazon_products_original_inventory.jpg)




In mySQLWorkbench, populating the products table with products, actual display:



<img src="images/bamazon_products_display_customerView.jpg" width="800">
![](images/bamazon_products_display_customerView.jpg)

In order to run bamazonCustomer.js on node.js, will need to 
1. run npm init to create package.json file with inquirer and mysql dependencies from the terminal and 
2. run npm install inquirer and npm install mysql to create node_modules to store the npm packages: 



<img src="images/npm_dependencies.jpg" width="800">
![](images/npm_dependencies.jpg)

Running this application will first display a prompt asking the user if he/she would like to SHOP or EXIT (i.e., end connection to local host) followed by display of all items available for sale. Include ids, names, and prices for sale (customer view of products table). 
The app then prompt users with two messages.
   * The first message should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.
Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.


The image below shows that the user has selected 5 units of  item_id 10. The order is fulfilled because the number of units selected is equal to the stock_quantity. Cost to the customer: 44875.




<img src="images/purchase_Omega.jpg" width="800">
![](images/purchase_Omega.jpg)


The original product inventory displayed in mySQLWorkbench appears below:




<img src="images/mySQLWorkbench_original_inventory.jpg" width="800">
![](images/mySQLWorkbench_original_inventory.jpg)




After the purchase of five(5) Omega watches, the inventory resolves to 0: 




<img src="images/mySQLWorkbench_OmegaPurchase.jpg" width="800">
![](images/mySQLWorkbench_OmegaPurchase.jpg)




So if user tries to purchase two(2) more Omega watches, user receives the message `Insufficient quantity!`because the inventory is already at zero. Order is prevented from going through (see screenshot of terminal below):




<img src="images/OmegaDepleted.jpg" width="800">
![](images/OmegaDepleted.jpg)




Validating insufficient quantity when user tries to order 51 of the Apple MacBook Pros advertised at 19.99, item_id = 9, since stock_quantity is 50. Additionally, when user chooses EXIT at the prompt, the connection to the mySQL server via mySQL npm package is terminated.




<img src="images/AppleInsufficientQuantity.jpg" width="800">
![](images/AppleInsufficientQuantity.jpg)



In order to test this code, the user will need to:

1. Install mySQLWorkbench and create password for mySQLWorkbench 
2. Execute code in Amazon.sql in mySQLWorkbench
3. initiate and install all the npm packages listed in bamazonCustomer.js: inquirer, mysql
4. Enter password for mySQLWorkbench in bamazonCustomer.js
