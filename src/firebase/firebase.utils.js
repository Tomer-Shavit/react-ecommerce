import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDJHN1brlKSj3JRFKwrB44K1rFtF_M0ado",
  authDomain: "react-ecommerce-3ddd5.firebaseapp.com",
  databaseURL: "https://react-ecommerce-3ddd5-default-rtdb.firebaseio.com",
  projectId: "react-ecommerce-3ddd5",
  storageBucket: "react-ecommerce-3ddd5.appspot.com",
  messagingSenderId: "501297366248",
  appId: "1:501297366248:web:20e5d9c6a47a862c8d755d",
};

//initializing the connection
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //checks is there is a user in the ref  and save the user in the database if there is no user there
  //The function returns the user ref in the database
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const date = new Date();

    try {
      userRef.set({
        displayName,
        email,
        date,
        ...additionalData,
      });
    } catch (err) {
      console.log(`An error occurred: ${err}`);
    }
  }

  return userRef;
};

export const convertSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((collection) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, collection);
  });

  return await batch.commit();
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  firebase.auth().signInWithPopup(googleProvider);
export default firebase;
