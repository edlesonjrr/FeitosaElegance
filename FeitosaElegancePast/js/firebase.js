// js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAWNJDbbbztOR-ppf4OHDy26poqolw15M",
  authDomain: "feitosaelegance-7e3fd.firebaseapp.com",
  projectId: "feitosaelegance-7e3fd",
  storageBucket: "feitosaelegance-7e3fd.appspot.com", // <-- CORRIGIDO AQUI!
  messagingSenderId: "1006712384954",
  appId: "1:1006712384954:web:c47c76d7df7947c5e1c183",
  measurementId: "G-TXZY1JJWV0" // pode remover se não for usar Analytics
};

// INICIALIZA FIREBASE
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Firebase iniciado com sucesso!");
console.log("Auth:", auth ? "OK" : "ERRO");
console.log("Firestore:", db ? "OK" : "ERRO");
