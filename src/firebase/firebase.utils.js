import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7w6EXxXVXc6pyrvuGyMnHxJFebzyJD1E",
    authDomain: "crwn-db-b736e.firebaseapp.com",
    databaseURL: "https://crwn-db-b736e.firebaseio.com",
    projectId: "crwn-db-b736e",
    storageBucket: "crwn-db-b736e.appspot.com",
    messagingSenderId: "915693149570",
    appId: "1:915693149570:web:e52f8b2f64c771e3dbc39b",
    measurementId: "G-X4DF1H2S99"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {

        if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        
        if(!snapShot.exists){

            const { displayName, email } = userAuth;
            const createdAt = new Date();
            
            try{

                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })

            }catch(error){
                console.log('Error creating user ',error.message);

            }
        }
        return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;