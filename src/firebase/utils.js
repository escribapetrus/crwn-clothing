import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyASOg0aysbyy-BRZYqviD-yv583bUbf-ZE",
    authDomain: "crwn-db-1ae0f.firebaseapp.com",
    databaseURL: "https://crwn-db-1ae0f.firebaseio.com",
    projectId: "crwn-db-1ae0f",
    storageBucket: "crwn-db-1ae0f.appspot.com",
    messagingSenderId: "494014378533",
    appId: "1:494014378533:web:b967dd1632d1c0a409c5cc"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;