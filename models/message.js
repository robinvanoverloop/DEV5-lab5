// require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name:  { type: String, required: true }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;