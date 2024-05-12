import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB28yaz4-YF6qLeh43vK8FirSuNXqVtejE",
  authDomain: "cv-portal-42b26.firebaseapp.com",
  projectId: "cv-portal-42b26",
  storageBucket: "cv-portal-42b26.appspot.com",
  messagingSenderId: "752009462754",
  appId: "1:752009462754:web:533f543bc501b7e1936fbb",
  measurementId: "G-XMFHZ3B033",
};
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);