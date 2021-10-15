import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {

};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firebase();
const storage = firebase.storage();

export { db, storage };
