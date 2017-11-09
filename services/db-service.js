//const FoodModel = require('../models/food-model')
const fs = require('fs')
//const dbPath = `${__dirname}/../database.json`

async function findAll(pathName, dataModel){
    return new Promise((resolve, reject) => {
        fs.readFile(pathName, 'utf8', (err, data) =>{
            if(err) return reject(err)
            const allData = JSON.parse(data).map(dataModel.create) 
            resolve(allData)
        })

    })
    
}

async function find(dataId, pathName, dataModel){
    const allData = await findAll(pathName, dataModel)
    return allData.find(p => p.id == dataId)
}

async function add(item, pathName, dataModel) {
    const allData = await findAll(pathName, dataModel)
    const lastItem = allData[allData.length - 1]
    const lastItemId = lastItem && lastItem.id || 0
    item.id = lastItemId + 1

    item = dataModel.create(item)
    allData.push(item)

    await saveAll(allData, pathName)
    return item
}

async function del(itemId, pathName, dataModel){
    const allData = await findAll(pathName, dataModel)
    const itemIndex = allData.findIndex(p => p.id == itemId)
    if(itemId < 0) return

    allData.splice(itemIndex, 1)

    saveAll(allData, pathName)
}

async function saveAll(items, pathName){
    return new Promise((resolve, reject) => {
        fs.writeFile(pathName, JSON.stringify(items), (err) =>{
            if(err) reject(err)
            resolve()
        });
    })
    
}

module.exports = {
    find,
    findAll,
    add,
    del
}