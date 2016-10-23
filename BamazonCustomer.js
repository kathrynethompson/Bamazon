var mysql = require('mysql');
var inquirer = require('inquirer');

var conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "sammy12",
    database: "bamazon_db"
});

conn.connect(function(err) {
	if(err){
		console.log(err);
		throw err;
	}

	conn.query('SELECT * FROM products', function(err, res){
		if(err) throw err;
		console.log('ID# Price Product                      ');
		console.log('-----------------------------------------');
		var i = 0;
		var products = [];
	
		while (i < res.length){
			console.log(res[i].ItemID + '  ' + res[i].Price + '    ' + res[i].ProductName);
			console.log('-----------------------------------------');
			products.push(res[i].ProductName);
			i++;
		}
		
		inquirer.prompt([
			{
				type: 'list',
				name: 'product',
				message: 'What would you like to buy?',
				choices: products
			},{
				type: 'input',
				name: 'quantity',
				message: 'How many?'
			}
		]).then(function(answers) {
			
			conn.query('SELECT * FROM products WHERE ProductName = ?', answers.product, function(err,res){
				if(err) throw err;
				
				if (res[0].StockQuantity < parseInt(answers.quantity)) {
					console.log("Item currently out of stock.");
				}else{
					console.log("Transaction successful!");
					console.log("Your total cost is $" + (res[0].Price * parseInt(answers.quantity)));
					
					conn.query('UPDATE products SET ? WHERE ?', [{
						StockQuantity: (res[0].StockQuantity - parseInt(answers.quantity))
					},{
						ProductName: answers.product
					}], function(err, res){
						if (err) throw err;
					})
				}
			})
		})
	});
})