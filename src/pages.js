//Estou requisitando uma página quando faço o código abaixo
const orphanages = require("./database/fakedata.js") 

module.exports = {
    index(request, respose){
        const city = request.query.city
        return respose.render('index', { city })
    },
    orphanage(request, respose){
        return respose.render('orphanage')
    },
    orphanages(request, respose){
        return respose.render('orphanages', { orphanages })
    },
    createOrphanage(request, respose){
        return respose.render('create-orphanage')
    }
}