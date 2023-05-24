import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD1G0zbMjc4d3BQJ9ToyZTvMYPvH4H8gDw",
    authDomain: "mon-premier-projet-d37e2.firebaseapp.com",
    databaseURL: "https://mon-premier-projet-d37e2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mon-premier-projet-d37e2",
    storageBucket: "mon-premier-projet-d37e2.appspot.com",
    messagingSenderId: "203014492007",
    appId: "1:203014492007:web:3c18180196205d2254e9c2",
    measurementId: "G-11NVWLS2SY"
};

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);

export { fireDb };