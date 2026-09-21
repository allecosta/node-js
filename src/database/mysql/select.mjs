import { con } from './db.mjs';

con.connect((error) => {
  if (error) 
    throw error;
  
  con.query("SELECT * FROM customers", (error, result) => {
    if (error) 
        throw error;
    
    console.log(result);
  });

  con.query("SELECT name, city FROM customers", (error, result) => {
    if (error)
        throw error;

    console.log(result)
  });
  
  con.end();
});
