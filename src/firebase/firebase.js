import * as firebase from 'firebase';

// const prodConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

// const devConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

// import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyC33H6938J5LOKhmZJyTTglh8MM94mpXmc",
    authDomain: "safe-bnb.firebaseapp.com",
    databaseURL: "https://safe-bnb.firebaseio.com",
    projectId: "safe-bnb",
    storageBucket: "",
    messagingSenderId: "162726616224"
};

firebase.initializeApp(config);
// export const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();
export default firebase;

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
