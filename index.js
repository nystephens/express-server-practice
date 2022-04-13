const express = require('express');

// here is where we set up our express server connection to the local port
const app = express();
const port = process.env.PORT || 3001

// this is the simple get request
app.get('/', (req, res)  => {
    res.send("Nate's Express App")
});



app.listen(port, () => {
    // remember: backticks means you can insert variables with the ${syntax}
    console.log(`server is live on port: ${port}`);
});