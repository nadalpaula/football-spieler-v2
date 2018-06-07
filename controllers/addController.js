
let self = {}
const publicationService = require('../services/publicationService.js')

self.add = function(data){
 
  publicationService.add.push({
	imagen: req.body.imagen, //siempre se refiere al AJAX
	titulo:req.body.titulo,
	id:buscarId + 1,
	like:0
})
res.json
    add: publicationService.add

}


module.exports = self;