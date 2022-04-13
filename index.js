const express = require('express');
const bodyParser =require('body-parser');

// here is where we set up our express server connection to the local port
const app = express();
const port = process.env.PORT || 3001

// use body parser to parse the json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [
    {name: 'Johnny', email: 'johnny@onthespot.com'},
    {name: 'Kevin', email: 'kevin@whereskevin.com'},
    {name: 'Jason', email: 'jasony@campcrystallake.com'},
    {name: 'Freddy', email: 'nightmare@elm.com'}
];

// this is the simple get request
app.get('/', (req, res)  => {
    res.send("Nate's Express App")
});

// get all users
app.get('/users', (req, res)  => {
    res.json({ ok: true, users });
});


app.post('/adduser', (req, res)  => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email }) = req.body;
        res.json({ok: true, users});
    }
}); 




app.listen(port, () => {
    // remember: backticks means you can insert variables with the ${syntax}
    console.log(`server is live on port: ${port}`);
});