const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    status: { type: String, default: 'Pending' } // Pending, Approved, Cancelled
});
module.exports = mongoose.model('Appointment', appointmentSchema);