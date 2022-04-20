// Import the functions you need from the SDKs you need
import {
  // getAuth,
  // signInWithPopup,
  initializeApp,
  // GoogleAuthProvider,
} from "firebase/app";
// import { getFireStore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const provider = new GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
const firebaseConfig = {
  apiKey: "AIzaSyDuF8B4uLhiNqIUkbV4mNncwPaazE1eoGE",
  authDomain: "ezexchange-391f7.firebaseapp.com",
  projectId: "ezexchange-391f7",
  storageBucket: "ezexchange-391f7.appspot.com",
  messagingSenderId: "239529270671",
  appId: "1:239529270671:web:22d2e1c42f99277a5a3ffa",
  measurementId: "G-7XVW8X5LM2",
};
// const auth = getAuth();
// const signIn = signInWithPopup(auth, provider)
//   .then(() => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     // const credential = GoogleAuthProvider.credentialFromResult(result);
//     // const token = credential.accessToken;
//     // // The signed-in user info.
//     // console.log(token);
//     // const user = result.user;
//     // console.log(user);
//     this.$router.push("/");
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     console.log(errorCode);
//     const errorMessage = error.message;
//     console.log(errorMessage);
//     // The email of the user's account used.
//     const email = error.email;
//     console.log(email);
//     // // The AuthCredential type that was used.
//     // const credential = GoogleAuthProvider.credentialFromError(error);
//     // console.log(credential);
//     // ...
//   });
// Initialize Firebase
initializeApp(firebaseConfig);
// const db = getFireStore();
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);+
export { app };
