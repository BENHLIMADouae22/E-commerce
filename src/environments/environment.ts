

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export const environment = {
  firebase: {
    apiKey: "AIzaSyDnU7dbdML0vQMga1DqqEuOLV_2O029EwI",
  authDomain: "douaeshop-5af52.firebaseapp.com",
  projectId: "douaeshop-5af52",
  storageBucket: "douaeshop-5af52.appspot.com",
  messagingSenderId: "989869249677",
  appId: "1:989869249677:web:6a66eb2b4336d971f37ec4"


    // projectId: 'douaeshop-5af52',
    // appId: '1:989869249677:web:6a66eb2b4336d971f37ec4',
    // storageBucket: 'douaeshop-5af52.appspot.com',
    // apiKey: 'AIzaSyDnU7dbdML0vQMga1DqqEuOLV_2O029EwI',
    // authDomain: 'douaeshop-5af52.firebaseapp.com',
    // messagingSenderId: '989869249677',
  }
// Your web app's Firebase configuration

  
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
