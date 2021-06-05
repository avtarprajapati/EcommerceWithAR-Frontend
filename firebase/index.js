import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

// const firebaseConfig = {
//   apiKey: 'AIzaSyB-Sq0xQeEKzNo5kD3Yj_5JmHhtOuUsv_s',
//   authDomain: 'ecommerce-f8f15.firebaseapp.com',
//   projectId: 'ecommerce-f8f15',
//   storageBucket: 'ecommerce-f8f15.appspot.com',
//   messagingSenderId: '431227459290',
//   appId: '1:431227459290:web:c18b9598e551f8877237e3',
// };

// new Project EwithAR
const firebaseConfig = {
  apiKey: 'AIzaSyAcvqaHcwuXc9aUiZvU2UHo_DtZAko85_A',
  authDomain: 'ewithar-17208.firebaseapp.com',
  projectId: 'ewithar-17208',
  storageBucket: 'ewithar-17208.appspot.com',
  messagingSenderId: '654905867490',
  appId: '1:654905867490:web:be3dc57e07f42455f9f2bb',
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
