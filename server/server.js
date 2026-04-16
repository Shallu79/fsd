const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send("<h2>👋 Welcome to shalini's Backend Server!</h2>");
});

app.post('/api/login', (req, res) => {
    
    const { email, password } = req.body;

    console.log("Data come from frontend:", email, password);

    
    if (email && password) {
        
        res.status(200).json({ 
            success: true, 
            message: "Login successful API hit!", 
            userEmail: email 
        });
    } else {
       
        res.status(400).json({ 
            success: false, 
            error: "Email aur Password both required." 
        });
    }
});


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🚀`);
});