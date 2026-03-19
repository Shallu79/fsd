const express = require("express");
const app = express();
const PORT = 3000;

const path = require('path');

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Learning express");
});


app.get('/aboutus', (req, res) => {
    res.send("Test case 1");
});


app.post('/data', (req, res) => {
    res.send({
        message: "POST received",
        data: req.body
    });
});
app.use('/static', express.static(path.join(__dirname, 'public')));
app.listen(PORT, (error) => {
    if (!error) {
        console.log("server is running successfully " + PORT);
    } else {
        console.log("Server has not started", error);
    }
});