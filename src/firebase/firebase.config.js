import firebase from 'firebase/app' 
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios'

let config = {
  apiKey: "AIzaSyC_MJ9eItRKh6LYLuBKCH2kgLHXVOFojM8",
  authDomain: "crwn-db-71b48.firebaseapp.com",
  databaseURL: "https://crwn-db-71b48-default-rtdb.firebaseio.com",
  projectId: "crwn-db-71b48",
  storageBucket: "crwn-db-71b48.appspot.com",
  messagingSenderId: "874581160392",
  appId: "1:874581160392:web:b1ace56e860177126bd0fd",
  measurementId: "G-DKPRD6D0D3"
}

firebase.initializeApp(config)

const db = firebase.firestore()

export { Axios, db }