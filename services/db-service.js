const fs = require('fs')

async function findAll(dataModel) {
    return dataModel.find()
}


async function find(dataModel, id) {
    try{
        const doc = await dataModel.findOne({id})
        if(!doc) console.log("Data Not Found")
    }
    catch(err){
        console.log(err)
    }
}

async function add(dataModel, doc){
    return dataModel.create(doc)
}

async function del(dataModel, id){
    try{
        const result = await dataModel.remove({ id })  
    }
    catch(err){
        console.log(err)
    }
    
}



module.exports = {
    find,
    findAll,
    add,
    del
}