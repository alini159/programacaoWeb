const express = require('express');
const mongoose = require('mongoose');
const rotas = require ("./rotas/routes");
const app = express();

mongoose.connect('mongodb+srv://pantanal:pantanal@reservaspantanal.symiw.mongodb.net/reservas?retryWrites=true&w=majority', {
  useNewUrlParser: true ,
  useUnifiedTopology: true
})

app.use(express.json());
app.use(rotas);

app.listen(3333);

