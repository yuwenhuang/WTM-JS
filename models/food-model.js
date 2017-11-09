module.exports = class Food{
    constructor(id, name, country, type) {
        this.id = id || 0
        this.name = name
        this.country = country
        this.type = type
    }

    static create(food){
        return new Food(food.id, food.name, food.country, food.type);
    }


}