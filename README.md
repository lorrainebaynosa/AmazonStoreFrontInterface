# AmazonStoreFrontInterface
AmazonStoreFrontInterface creates an Amazon-like storefront that takes in orders from customers and depletes stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store. SQL statements will be used to create the schema (structure for the database), while npm packages inquire and mysql will be used to prompt customers for answers and query and update the database stored/displayed in MySQLworkbench, respectively. 

AmazonStoreFrontInterface is a Command Line Interface(CLI) application that takes in user input and returns data. Screenshots will be displayed showing typical user flow through the application (customer and/or manager/supervisor),including prompts and responses after various selctions.

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
   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.
Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.


The image below shows that the user has selected 5 units of  item_id 10.



<img src="images/purchase1_Omega5.jpg" width="800">
![](images/purchase1_Omega5.jpg)


The original product inventory displayed in mySQLWorkbench appears below:
<img src="images/mySQLWorkbench_original_inventory_customerView.jpg" width="800">
![](images/mySQLWorkbench_original_inventory_customerView.jpg)



After the purchase of five(5) Omega watches, the inventory resolves to 0: 


<img src="images/mySQLWorkbench_Omega5purchase.jpg" width="800">
![](images/mySQLWorkbench_Omega5purchase.jpg)



In order to test this code, the user will need to:

1. Install mySQLWorkbench and create password for mySQLWorkbench 
2. Execute code in Amazon.sql in mySQLWorkbench
3. initiate and install all the npm packages listed in bamazonCustomer.js: inquirer, mysql
4. Enter password for mySQLWorkbench in bamazonCustomer.js
