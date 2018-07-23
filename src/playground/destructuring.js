// Object Destructuring

/*
const person = {    
    age: 27,
    location: {
        city: 'Winnipeg',
        temp: 32
    }
}

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} is ${city}.`);
}
*/

/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);
*/

// Array Destructuring

/*
const address = ['200 Belle Ave', 'Winnipeg', 'Manitoba', 'R2M 1T2'];
const [steet, city, province, zip] = address;
console.log(`You are in ${city} ${province}.`);
*/

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);