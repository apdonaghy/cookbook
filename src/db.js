import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsCEZACXpOxbQrIwtT5U5dH8BtA9JuidY", 
    databaseURL: "https://vue-spas-75809.firebaseio.com",
    projectId: "vue-spas-75809",
    storageBucket: "vue-spas-75809.appspot.com",
    messagingSenderId: "399890640990",
    appId: "1:399890640990:web:c819983db72f5a996404cf"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
