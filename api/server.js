const express = require('express')
const cors = require('cors');
const app = express()
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    if(username === 'mastermind1234321@gmail.com') {
        res.status(200).send({name: 'Rohit'});
    } else if(username === 'abcd') {
        res.status(401).send('Invalid Username')
    } else {
        res.status(200).send({name: username});
    }


})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
