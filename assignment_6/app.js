const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Data = require('./models/Data');
const User = require('./models/User');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myProjectDB')
    .then(async () => {
        console.log("--- DB CONNECTED SUCCESSFULLY ---");
        
        // Create test admin if missing
        const existingAdmin = await User.findOne({ email: 'admin@travel.com' });
        if (!existingAdmin) {
            await User.create({ email: 'admin@travel.com', password: '123' });
            console.log("--- TEST ADMIN CREATED: admin@travel.com | Pass: 123 ---");
        }
    })
    .catch(err => console.log("DB ERROR", err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// 1. Login Page
app.get('/', (req, res) => {
    res.render('index');
});

// 2. Login Logic
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email: email, password: password });
    
    if (foundUser) {
        res.redirect('/dashboard');
    } else {
        res.send('<h2 style="text-align:center; margin-top:50px;">Wrong Email or Password! <a href="/">Try Again</a></h2>');
    }
});

// 3. Dashboard Page
app.get('/dashboard', async (req, res) => {
    const items = await Data.find({});
    res.render('dashboard', { items });
});

// 4. Add New Package to DB
app.post('/add', async (req, res) => {
    await Data.create(req.body);
    res.redirect('/dashboard');
});

app.listen(3000, () => console.log("--- SERVER STARTED AT http://localhost:3000 ---"));