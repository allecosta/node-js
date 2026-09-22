import { con } from './db.mjs';

con.connect((error) => {
    if (error)
        throw error;

    let sql = "INSERT INTO categories (categoryName, description) VALUES ('Beverages', 'Soft drinks, coffees, teas, beers, and ales')";

    con.query(sql, (error) => {
        if (error)
            throw error;

        console.log("WINS! 1 record inserted");
    });

    let sql = "INSERT INTO categories (categoryName, description) VALUES ?";
    let values = [
        ['Condiments',	'Sweet and savory sauces, relishes, spreads, and seasonings'],
        ['Confections',	'Desserts, candies, and sweet breads'],
        ['Dairy Products',	'Cheeses']
    ];

    con.query(sql, [values], (error, result) => {
        if (error) 
            throw error;

        console.log("WINS! Records inserted:", result.affectedRows);
    });

    con.end();
});