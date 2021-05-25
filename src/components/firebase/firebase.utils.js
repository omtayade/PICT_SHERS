import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA6JAA3zwJEVvFd8RN2-X6W-gZsWW9kRvA",
    authDomain: "pict-shers.firebaseapp.com",
    projectId: "pict-shers",
    storageBucket: "pict-shers.appspot.com",
    messagingSenderId: "239120064052",
    appId: "1:239120064052:web:145c80d4e75a4a7a05f461"
};

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const setData = async (productType,productName,productCondition,sellingPrice, meetingPlace, CurrentUser) => {
  const userAuth =firebase.auth().currentUser;
 
  const nameOfSeller=CurrentUser.displayName;
  console.log(CurrentUser)
  const emailIdSeller=CurrentUser.email;
  const MobileNumberSeller =CurrentUser.phone
  const soldAt = new Date();
 console.log(`${nameOfSeller}${emailIdSeller}${MobileNumberSeller}`)
  const userProductRef = firestore.doc(`users/${firebase.auth().currentUser.uid}/soldProducts/${soldAt}`)
  const productRef = firestore.doc(`${productType}/${firebase.auth().currentUser.uid}`)
 
  try{
        await userProductRef.set({
          
          productType,
          productName,
          sellingPrice,
          productCondition,
          meetingPlace
        });
        await productRef.set({
        nameOfSeller,
        emailIdSeller,
        MobileNumberSeller,
        soldAt,
        productType,
        productName,
        productCondition,
        sellingPrice,
        meetingPlace
        });
        
    
  }
  catch(error){
      console.log(error.message)
  }
  
  return userProductRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;