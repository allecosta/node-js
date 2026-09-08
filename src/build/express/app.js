const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/services', (req, res) => {
    res.send("Services Page");
});

app.get('/founder', (req, res) => {
    res.send("Founder Page");
});

app.get('/presentation', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Hello Express</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; margin: 40px; 
                    }

                    h1 { 
                        color: #0066cc; 
                    }
                    
                    p { 
                        margin-bottom: 20px; 
                    }
                </style>
            </head>
            <body>
                <h1>Hello Express !!!</h1>
                <p>This response was sent using Express routing.</p>
                <p>
                    Try other routes: 
                    <a href="https://safefyappsec.com.br/">Home</a>  
                    <a href="https://safefyappsec.com.br/service">About</a>  
                    <a href="https://safefyappsec.com.br/founder">Founder</a></p>
            </body>
        </html>
    `);
});

/*app.post('/user', (req, res) => {
    res.send("POST ...")
});*/


/*app.all('*', (req, res) => {
    res.status(404).send("404 - Not Found")
});*/

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});