const Passeios = require('../Models/Passeios');

module.exports = {
  // index(){},
  async show(req, res){
    const {usuario_id} = req.headers;

    const passeios = await Passeios.find({usuario:usuario_id});

    return res.json(passeios);
  },
  // store(req,res){
  //   return res.json({mensagem: "Fazendo login"});
  // },
  // update(){},
  // destroy(){},
}