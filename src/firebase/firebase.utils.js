import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBI2zNptaUpLr2eXEFU_atvbKGYoMgXPoA",
    authDomain: "crwn-db-6be95.firebaseapp.com",
    databaseURL: "https://crwn-db-6be95.firebaseio.com",
    projectId: "crwn-db-6be95",
    storageBucket: "crwn-db-6be95.appspot.com",
    messagingSenderId: "19886745424",
    appId: "1:19886745424:web:28b687979a6bf6e0c72e55",
    measurementId: "G-NJ18G5WEMX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        console.log("createUserProfileDocument userAuth: " + userAuth);
        return;
    }
    console.log("additionalData: " + additionalData);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    console.log(snapshot);
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("Error creating user: ", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication Utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

