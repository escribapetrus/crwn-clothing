import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
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
  

export const addCollectionAndDocuments = async (key, objects) =>  {
  const ref = firestore.collection(key);
  console.log(ref);
  const batch = firestore.batch();
  objects.forEach(obj => {
    const newDocRef = ref.doc();
    batch.set(newDocRef,obj)
  });
  return await batch.commit();  
};

export const convertSnapShotToMap = (collections) => {
  const tranformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return tranformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;