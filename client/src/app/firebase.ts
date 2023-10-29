import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA_Bq3hbnZ1nhSbEY4yOjB0neB81dffCJ8",
    authDomain: "sustainability-app-730ba.firebaseapp.com",
    projectId: "sustainability-app-730ba",
    storageBucket: "sustainability-app-730ba.appspot.com",
    messagingSenderId: "986777602262",
    appId: "1:986777602262:web:286eea57e08c1355d3a177"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);