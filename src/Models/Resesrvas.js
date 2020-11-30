const mongoose = require('mongoose');

const ReservasSchema = new mongoose.Schema({
  data: String,
  configuracao: Boolean,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  passeio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Passeio'
  },
  
});

module.exports = mongoose.model('Reserva', ReservasSchema);