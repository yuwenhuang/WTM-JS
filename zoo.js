class Animal{
    constructor(name,type,gender,age,sick,enclosure){
        this.name = name;
        this.type = type;
        this.gender = gender;
        this.age = age;
        this.sick = sick;
        this.enclosure = enclosure;
    }

    isHealth(){
        if(this.enclosure.haveEnoughSpace(10)){
            console.log("This "+ this.type+" "+this.name+" is healthy.");
            return true;
        }
        else{
            console.log("This "+ this.type+" "+this.name+" is sick :(");
            return false;
        }
    }
}

class Vet{
    constructor(ability){
        this.ability = ability;
    }

    treat(){
        if(this.ability < 60){
            console.log("Treat is Fail :(");
            return "Fail";
        }
        else{
            console.log("Treat is Success!");
            return "Success";
        }
    }
}

class Enclosure{
    constructor(type,capacity,name){
        this.type = type;
        this.capacity = capacity;
        this.name = name;
    }

    haveEnoughSpace(numberofAnimals){
        if(numberofAnimals < this.capacity){
            return true;
        }
        else return false;
    }
}

class Zookeeper{
    feed(animal,time,place){
        console.log("The animal " + animal + " is feed at " + time +" in "+place);
    }
}


TigerHome = new Enclosure('Tiger', 5,'TigerHome');
LionHouse = new Enclosure('Lion', 15,'LionHouse');


Tigger = new Animal('Tigger','Tiger', 'M', 3, 0, TigerHome);
Tiggerin = new Animal('Tiggerin', 'Tiger', 'F', 2, 0, TigerHome);
Simba = new Animal('Simba','Lion', 'M', 5, 0, LionHouse);
Nala = new Animal('Nala','Lion', 'F', 5, 0, LionHouse);

Angel = new Vet(100);
Kate = new Zookeeper();

animals = [Tigger, Tiggerin, Simba, Nala];

animals.forEach(function(animal) {
    if(!animal.isHealth()){
        Angel.treat();
    }
    Kate.feed(animal.type, '17:30', animal.enclosure.name);
}, this);





