const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./models/Item');
const Appointment = require('./models/Appointment');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// 👉 THE ULTIMATE DATABASE CONNECTION PROOF 👈
mongoose.connect('mongodb://127.0.0.1:27017/desiWheelsDB')
    .then(() => {
        console.log("=========================================");
        console.log("✅ DATABASE CONNECTED SUCCESSFULLY! ✅");
        console.log("Database Name: desiWheelsDB");
        console.log("=========================================");
    })
    .catch(err => console.log("❌ DATABASE ERROR:", err));

// SEED DATA - Fills the DB with Indian vehicles on startup
const seedDB = async () => {
    await Item.deleteMany({}); 
    await Appointment.deleteMany({}); 
    await Item.create([
        { name: "Mahindra Thar", type: "Car", price: 1550000, description: "4x4, Diesel, 2023 model." },
        { name: "Tata Safari", type: "Car", price: 2100000, description: "Dark Edition, 7-Seater." },
        { name: "Maruti Swift", type: "Car", price: 650000, description: "ZXI+, Great mileage." },
        { name: "Royal Enfield Classic 350", type: "Bike", price: 215000, description: "Gunmetal Grey." }
    ]);
    console.log("🚗 NEW INDIAN VEHICLES LOADED INTO DATABASE!");
};
seedDB();

// --- ROUTES ---

app.get('/', async (req, res) => {
    const items = await Item.find({});
    res.render('index', { items });
});

app.get('/book/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('book', { item });
});

app.post('/book', async (req, res) => {
    const { itemId, userName, userEmail, appointmentDate } = req.body;
    if (!userName || !userEmail || !appointmentDate) return res.send("Fill all fields!");
    await Appointment.create({ itemId, userName, userEmail, appointmentDate });
    res.redirect('/admin');
});

app.get('/admin', async (req, res) => {
    const appointments = await Appointment.find().populate('itemId');
    res.render('admin', { appointments });
});

app.post('/admin/update/:id', async (req, res) => {
    await Appointment.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.redirect('/admin');
});

app.listen(3000, () => console.log("🌐 Server running at http://localhost:3000"));