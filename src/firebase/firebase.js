import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default, googleAuthProvider };

// child_removed, listener when a child is removed
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// child_changed, listener when one of the child is changed
// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// child_added, listener when a new child is added
// database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(expenses);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 100500
// });

// database.ref('expenses').push({
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: -95000
// });

// database.ref('notes').push({
//     title: 'To Do',
//     boday: 'Go for a run'
// });

// const notes = [{
//     id: '12',
//     title: 'First Note!',
//     body: 'This is my note'    
// }, {
//     id: '716ae',
//     title: 'Second Note!',
//     body: 'This is my note' 
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {    
//     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`);
// });

// setTimeout(() => {
//     database.ref('name').set('Bogdan Hield');
// }, 3500);

// database.ref('job').once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(() => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//     name: "Ollie de Guzman",
//     age: 31,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: "Winnipeg",
//         country: "Canada"
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().remove()
//     .then(() => {
//         console.log('Data is removed.');
//     })
//     .catch((e) => {
//         console.log('Error', e);
//     });

//database.ref('isSingle').set(null);