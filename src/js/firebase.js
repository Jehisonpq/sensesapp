import firebase from 'firebase/app';
import 'firebase/firestore';

const apiKey = 'AIzaSyCLK-U1kbb0O_gUF2z0bG_LQKc7WhQZcFY';
const projectId = 'sensesapp-20573';
firebase.initializeApp({
    apiKey,
    projectId
})
const db = firebase.firestore();

export default db;