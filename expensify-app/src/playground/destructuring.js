// const person = {
//     name: 'Keith ',
//     age: '28',
//     location: {
//         city: 'Charlotte',
//         temp: 50
//     }
// }

// const {name = 'Anonymous', age} = person

// const { city, temp: temperature } = person.location
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.  He lives in ${city} which is currently ${temperature} degrees outside`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

// 
// Array destructuring
// 

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
// const [street, city, state, zip] = address
// console.log(`You are in ${city} ${state}`)

const item = ['Coffee', '$2.00', '$2.50', '$2.75']
const [name, , medium] = item
console.log(`A medium ${name} costs ${medium}`)