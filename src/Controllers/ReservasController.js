const Reservas = require('../Models/Resesrvas');

module.exports = {
  // index(){},
  // show(){},
  async store(req, res) {
    const { pid } = req.params;
    const { usuario_id } = req.headers;
    const { data } = req.body;


    const reserva = await Reservas.create({
      usuario: usuario_id,
      passeio: pid,
      data
    })

    await reserva.populate("usuario").populate("passeio").execPopulate(); 

    return res.json(reserva);
  },
  // update(){},
  // destroy(){},
}