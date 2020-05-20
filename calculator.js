const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true})); // parse data from a form

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // console.log(__dirname); // C:\Users\calculator
});
// __dirname is file path of the current file no matter where it's hosted, on another computer for example

app.post('/', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    res.send(`Sum: ${sum} Thanks for posting that!`);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
    const { weight, height } = req.body;
    const result = Number(weight) / Number(height * height);
    res.send(`Your BMI is ${result.toFixed(2)}`);
});

app.listen(3000, () => console.log('Server listening on port 3000'));