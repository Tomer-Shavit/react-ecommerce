import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDJHN1brlKSj3JRFKwrB44K1rFtF_M0ado",
  authDomain: "react-ecommerce-3ddd5.firebaseapp.com",
  databaseURL: "https://react-ecommerce-3ddd5-default-rtdb.firebaseio.com",
  projectId: "react-ecommerce-3ddd5",
  storageBucket: "react-ecommerce-3ddd5.appspot.com",
  messagingSenderId: "501297366248",
  appId: "1:501297366248:web:20e5d9c6a47a862c8d755d"
};

//initializing the connection
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const date = new Date();

    try{
      userRef.set({
        displayName,
        email,
        date,
        ...additionalData
      });
    } catch(err){
      console.log(`An error occurred: ${err}`);
    }
  }

  return userRef;
};

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export default firebase;
