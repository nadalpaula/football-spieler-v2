let self = {}

const publicationService = require('../services/publicationService.js')

self.home = function(req, res){
        res.render('index', {
        contenido: publicationService.showImages
    })
    };

self.like = function(req, res){
 res.json({
    like: publicationService.like(req.body.id)
 })

}




module.exports = self;