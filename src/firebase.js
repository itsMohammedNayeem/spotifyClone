import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDa8uYHq38NbzJdIruU0Hqhg3jQxzEnuPE',
  authDomain: 'spotify-playlist-lb.firebaseapp.com',
  projectId: 'spotify-playlist-lb',
  storageBucket: 'spotify-playlist-lb.appspot.com',
  messagingSenderId: '876981581675',
  appId: '1:876981581675:web:abcd6812cf494c5b3c3e2e'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
