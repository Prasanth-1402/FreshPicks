import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAhNLFQpGSOYyKW7n6nTTU4_SYwbTS_Z10',
  authDomain: 'freshpicksonline.firebaseapp.com',
  projectId: 'freshpicksonline',
  storageBucket: 'freshpicksonline.appspot.com',
  messagingSenderId: '627556687782',
  appId: '1:627556687782:web:f5e99b7a8cd75ca0dcf967',
  measurementId: 'G-E71D45YY6M',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export {auth};
