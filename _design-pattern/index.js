//patterns
// 1. singleton (commonly used in global configurations)
let SingletonFactory = (function(){
    function createInstance(x) {
        console.log('hello world', x)
        return x
    }
    let instance;
    let value = 5;
    return {
        getInstance: function(){
            if (!instance) {
                instance = createInstance(3);
            }
            return instance + value;
        }
    };
})();
const singleton = SingletonFactory.getInstance()

console.log(singleton)

// 2. module  (commonly used in library or creating modules)
let moduleFactory = (function(){
    const privateVar = '';
    function privateFunc(x) {
        console.log('hello world', x)
        return x
    }
    return {
        publicVar: 'public var',
        publicFunc: () => 'i am public'
    };
})();


const module = moduleFactory.publicFunc()

console.log(module)

// 3. observer  (commonly used in event handling)
class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer)
    }
    removeObserver(observer) {
        return this.observers.filter(ob => ob !== observer)
    }
    notifyObserver(data) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }
    update(data) {
        console.log(`${this.name} received update: ${data}`);
    }
}

const observable = new Observable()
const observer_1 = new Observer('first observer')
const observer_2 = new Observer('second observer')

observable.addObserver(observer_1)
observable.addObserver(observer_2)
observable.notifyObserver('first and second observer added')
console.log(observable.removeObserver(observer_1))
observable.notifyObserver('new observer removed')


console.log(observable)

// 4. prototype  (commonly used in library or creating modules)

function Sample (name, age) {
    this.name= name;
    this.age= age
    this.height= 1.68
}

Sample.prototype =  {
   sayName() {
      return  'my name is' + this.name
   },
   sayAge() {
      return 'my age is ' + this.age
   },
    sayHeight: function () {
       return 'my height is ' + this.height
    }
}
const sample = new Sample('ben', 32)
console.log(sample.sayName())
console.log(sample.sayAge())
console.log(sample.sayHeight())

function codility (s) {
    class Photo {
        constructor(name, city, time) {
            this.name = name;
            this.city = city;
            this.time = time;
        }

        getName() {
            return this.name;
        }

        setName(name) {
            this.name = name;
        }

        getCity() {
            return this.city;
        }

        setCity(city) {
            this.city = city;
        }

        getTime() {
            return this.time;
        }

        setTime(time) {
            this.time = time;
        }

        compareTo(otherPhoto) {
            return this.getTime().localeCompare(otherPhoto.getTime());
        }
    }

    let photos = [];
    let myMap = new Map();
    let listOfPhoto = [];
    let newName = "";

    let lines = s.split("\n");

    lines.forEach(line => {
        listOfPhoto.push(line);
    });

    for (let i = 0; i < listOfPhoto.length; i++) {
        // Tokenize the string by comma
        let tokens = listOfPhoto[i].split(",");

        // Eliminate blank spaces in each token and create a Photo object
        let photo = new Photo(tokens[0].trim(), tokens[1].trim(), tokens[2].trim());

        // Add the Photo object to the 'photos' array
        photos.push(photo);
    }

    for (let i = 0; i < photos.length; i++) {
        let pic = photos[i];
        let myPlace = pic.getCity();

        if (myMap.has(myPlace)) {
            // If the city key exists in 'myMap', add the 'pic' to the existing array
            myMap.get(myPlace).push(pic);
        } else {
            // If the city key does not exist in 'myMap', create a new array with 'pic' and set it in 'myMap'
            let mypics = [pic];
            myMap.set(myPlace, mypics);
        }
    }

    for (let i = 0; i < photos.length; i++) {
        let p = photos[i];
        let myLisSort = myMap.get(p.getCity());

        // Sort the photos by time within the city
        myLisSort.sort((a, b) => a.compareTo(b));

        // Find the position of the current photo in the sorted list
        let counter = myLisSort.findIndex(photo => photo === p) + 1;

        // Generate the new name based on the criteria
        newName += p.getCity() + (returnZeros(String(myMap.get(p.getCity()).length).length) + counter.toString().substring(String(counter).length) + p.getName().substring(p.getName().lastIndexOf("."))) +
            "\n";
    }

    function returnZeros(counter) {
        let str = '';

        for (let z = 0; z < counter; z++) {
            str += '0';
        }

        return str;
    }

    return newName;

}

console.log(codility('photo.jpg, kogi, 2022030-304-44 \n photo2.jpg, kogi, 2022030-304-433 \n photo3.jpg, kogi3, 2022030-304-333'))

const withFuel = (target, context) => {
    if(context.kind === 'class') {
        target.prototype.fuel = 50;
        target.prototype.isEmpty = () => {
            return this.fuel === 0
        };
    };
}
function deprecatedMethod(target, context) {
    if (context.kind === "method") {
        return function (...args) {
            console.log(`${context.name} is deprecated and will be removed in a future version.`)
            return target.apply(this, args)
        }
    }

}

// @withFuel
class Rocket {
    fuel = 90
    // @deprecatedMethod
    isReadyForLaunch() {
        return this.isEmpty()
    }
}
const rocket = new Rocket()
console.log(rocket.fuel)

for(var i  = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i)
    })
}
for(var i  = 0; i < 4; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i)
        })
    })(i)
}
[0, 1,2,3].forEach((i) => setTimeout(() => {
    console.log(i)
}))
for(let i  = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(i)
    })
}

/****move zero to the end of the list**/
// push all zeros to the end
//remove zero and mutate arr

function moveZeros (arr) {
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === 0) {
           arr.push(arr[i])
           arr.splice(i, 1)
       }
    }
    return arr
}

function moveMax (arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === Math.max.apply(this, arr)) {
            arr.push(arr[i])
            arr.splice(i, 1)
        }
    }
    return arr
}

console.log(moveMax([6,1,0,2,0,4,6,3]))

function deepFreeze(obj) {
    for(const key in obj) {
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            obj[key] = Object.freeze(obj[key])
        }
    }
    return Object.freeze(obj)
}

const unfreeze =  {
    1: 'a',
    2: {
        3: 'b',
        4: 'c',
        5: {
            6: 'i'
        }
    }
}
const freeze = deepFreeze(unfreeze)

freeze['1'] = 'd';
freeze['2']['3'] = 'd';
freeze['2']['5']['6'] = 'e'

console.log(freeze)