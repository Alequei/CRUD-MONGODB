const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  title: String,
  description: String,
  precio: String,
  stock:String,
});

module.exports = mongoose.model('tasks', TaskSchema);
