const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
apiKey: "AIzaSyBRHxMECg0azC3a92htW3GAA6pac6l5ImU",
authDomain: "kiei-451---rmf.firebaseapp.com",
projectId: "kiei-451---rmf",
storageBucket: "kiei-451---rmf.appspot.com",
messagingSenderId: "852348505402",
appId: "1:852348505402:web:0ace59dae50feb1ab79403"
} // Used my own Firebaseconfig - https://console.firebase.google.com/u/0/project/kiei-451---rmf/settings/general/web:MTI5NDA0NDctYTFhMS00N2M4LWIwNjctNGY2MGE2ZDYxMzRk


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase