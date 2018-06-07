let self = {}

let contenido = [{
        imagen: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/Real-Madrid-Toni-Kroos-Manchester-United-transfer-921997.jpg',
        titulo: 'Toni Kroos',
        id: '1',
        like: 0

    },
    {
        imagen: 'http://dailycannon.com/wp-content/uploads/2017/03/lukas-podolski-germany.jpg',
        titulo: 'Lukas Podolski',
        id: '2',
        like: 0
    },
    {
        imagen: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/Gareth-Bale-961897.jpg',
        titulo: 'Gareth Bale',
        id: '3',
        like: 0

    },
    {
        imagen: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/Lionel-Messi-933021.jpg',
        titulo: 'Lionel Messi',
        id: '4',
        like: 0

    }
]

self.showImages = function() {
    return contenido
}

self.like = function(data) {
    let likes = 0
    for (var i = 0; i < contenido.length; i++) {
        if (contenido[i].id == data) {
           contenido[i]['like'] = parseInt(contenido[i]['like']) + 1
            likes = contenido[i]['like']
        }
    }
    return likes
}

self.add = function(data){
    const saraza = contenido.length
    const buscarId = contenido[saraza - 1].id

    contenido.push({
        titulo: data.titulo,
        imagen: data.imagen,
        id: buscarId + 1,
        like: 0
    })

return contenido

} 




module.exports = self;