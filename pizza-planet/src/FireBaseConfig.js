
import Firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'



require("firebase/auth");
require("firebase/database");



var config = {
  apiKey: "AIzaSyAfvhVX6cpz37HyDr2Pc6bHC4rq5IhRnvU",
  authDomain: "pizza-planet-5d94f.firebaseapp.com",
  databaseURL: "https://pizza-planet-5d94f.firebaseio.com",
  projectId: "pizza-planet-5d94f",
  storageBucket: "pizza-planet-5d94f.appspot.com",
  messagingSenderId: "232636375803"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
 export const dbMenuRef=db.ref('menu')
