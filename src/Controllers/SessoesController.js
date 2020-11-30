const Usuario = require('../Models/Usuarios');
module.exports = {
  // index(){},
  // show(){},
  async store(req,res){
    const {email} =req.body;
    let usuario = await Usuario.findOne({email});
    if(!usuario){
      usuario = await Usuario.create({email})
    }
    return res.json(usuario); 
  },
  // update(){},
  // destroy(){},
}