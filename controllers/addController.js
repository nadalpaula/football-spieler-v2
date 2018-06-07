
let self = {}
const publicationService = require('../services/publicationService.js')

self.add = function(req, res){
 res.json({
 	contenido: publicationService.add(req.body)
})
}

module.exports = self;