const express = require('express');
const router = new express.Router();
var request = require('request');

// THIS IS CODE FOR TRYING EXTERNAL WEATHER API

// // this is the simple get request
// router.get('/', (req, res) => {
//     res.send("TIME TO CHECK THE WEATHER")
// });

// router.get('/getWeatherNewYork', (req, res) => {
//     request(
//         "http://api.weatherstack.com/current?access_key=1454df0626522546114ebfd680f50460&query=NewYork",
//         function (err, res, body) {
//             if (!err && res.statusCode == 200) {
//                 var parsedBody = JSON.parse(body);
//                 var wholeBody = parsedBody
//                 res.send(wholeBody);
//             }
//         }
//     );
// });

// THIS IS CODE FROM OUR PREVIOUS LOCAL USERS API

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