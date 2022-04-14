const express = require('express');
const bodyParser =require('body-parser');

// here is where we set up our express server connection to the local port
const app = express();
const port = process.env.PORT || 3001

// use body parser to parse the json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./routes/users'));

app.listen(port, () => {
    // remember: backticks means you can insert variables with the ${syntax}
    console.log(`server is live on port: ${port}`);
});