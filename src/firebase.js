import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyC33H6938J5LOKhmZJyTTglh8MM94mpXmc",
    authDomain: "safe-bnb.firebaseapp.com",
    databaseURL: "https://safe-bnb.firebaseio.com",
    projectId: "safe-bnb",
    storageBucket: "",
    messagingSenderId: "162726616224"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;