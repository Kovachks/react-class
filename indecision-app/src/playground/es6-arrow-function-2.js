// arguments object - no lo nger bound with arrow functions

const add = (a, b) => {
    return a + b
}

console.log(add(55, 1))

// this  keyword - no longer bound

const user =  {
    name: 'Keith',
    cities: ['Charlotte', 'Cincinnati', 'Cleveland'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived())

// Challenge area
 
const multiplier = {
    num: [3, 4, 19],
    multiplyBy: 2,
    multiplyNumbers() {
        return this.num.map((num) => this.multiplyBy * num ); 
    }
}

console.log(multiplier.multiplyNumbers())