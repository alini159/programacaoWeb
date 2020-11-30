const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  email: String,
});

module.exports = mongoose.model('Usuario', UsuarioSchema);