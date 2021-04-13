import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB-Sq0xQeEKzNo5kD3Yj_5JmHhtOuUsv_s',
  authDomain: 'ecommerce-f8f15.firebaseapp.com',
  projectId: 'ecommerce-f8f15',
  storageBucket: 'ecommerce-f8f15.appspot.com',
  messagingSenderId: '431227459290',
  appId: '1:431227459290:web:c18b9598e551f8877237e3',
};

// const app = firebase.initializeApp({
//   apiKey: 'AIzaSyB-Sq0xQeEKzNo5kD3Yj_5JmHhtOuUsv_s',
//   authDomain: 'ecommerce-f8f15.firebaseapp.com',
//   projectId: 'ecommerce-f8f15',
//   storageBucket: 'ecommerce-f8f15.appspot.com',
//   messagingSenderId: '431227459290',
//   appId: '1:431227459290:web:c18b9598e551f8877237e3',
// });

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const auth = app.auth();
export const storageRef = app.storage().ref();

export default app;
