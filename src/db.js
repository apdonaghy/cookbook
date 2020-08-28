import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASND-4U8aDjNDbVB7jzs3QDxOwYwq8jVY",
  authDomain: "cookbook-fa062.firebaseapp.com",
  databaseURL: "https://cookbook-fa062.firebaseio.com",
  projectId: "cookbook-fa062",
  storageBucket: "cookbook-fa062.appspot.com",
  messagingSenderId: "983098582230",
  appId: "1:983098582230:web:b835e4aee11095585a1577",
  measurementId: "G-BFPQV08YNG"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
