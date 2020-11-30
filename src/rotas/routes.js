const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/files');
const PasseiosController = require('../Controllers/PasseiosController');
const SessoesController = require('../Controllers/SessoesController');
const DashboardController = require('../Controllers/DashboardController');
const ReservasController = require('../Controllers/ReservasController');
const routes = express.Router();

const upload = multer(uploadConfig);

routes.post('/sessoes',SessoesController.store);
routes.get('/passeios',PasseiosController.index);
routes.post('/passeios',
              upload.single('imagem'),
              PasseiosController.store);
routes.get('/dashboard',DashboardController.show);
routes.post('/passeios/:pid/res', ReservasController.store);  

module.exports = routes;