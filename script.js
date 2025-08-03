// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Oi_aRvOt9KPDSCiwb9nOlQ4utJmXx6Y",
  authDomain: "wastify-87ca3.firebaseapp.com",
  projectId: "wastify-87ca3",
  storageBucket: "wastify-87ca3.firebasestorage.app",
  messagingSenderId: "225667659456",
  appId: "1:225667659456:web:f8f507c7dac0399c8d5f25",
  measurementId: "G-MZFB6N9RW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('register-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    console.log(email);
    const password = document.getElementById('password').value;
    console.log(password);

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('User registered:', user);
            alert('User registered successfully');
        })
        .catch((error) => {
            console.error('Error registering user:', error);
            alert('Error registering user');
        });
});

document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User logged in:', user);
            alert('User logged in successfully');
        })
        .catch((error) => {
            console.error('Error logging in:', error);
            alert('Error logging in');
        });
});
