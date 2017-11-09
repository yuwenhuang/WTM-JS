module.exports = class User{
    constructor(id, name, email){
        this.id = id || 0
        this.name = name
        this.email = email
    }

    static create(user){
        return new User(user.id, user.name, user.email)
    }
}