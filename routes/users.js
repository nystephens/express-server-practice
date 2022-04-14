const express = require('express');
const router = new express.Router();

const users = [
    {name: 'Johnny', email: 'johnny@onthespot.com'},
    {name: 'Kevin', email: 'kevin@whereskevin.com'},
    {name: 'Jason', email: 'jasony@campcrystallake.com'},
    {name: 'Freddy', email: 'nightmare@elm.com'}
];

// this is the simple get request
router.get('/', (req, res)  => {
    res.send("Nate's Express App")
});

// get all users
router.get('/users', (req, res)  => {
    res.json({ ok: true, users });
});

// get one user
router.get('/user/:name', (req, res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name)[0];
    res.json({ ok: true, user });
});

// this request will add a user
router.post('/adduser', (req, res)  => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.json({ok: true, users});
    }
}); 

module.exports = router;