

const firebaseConfig = {
    apiKey: "AIzaSyC5Zqjl7-PLOuW-92Crue0J6teFtPRcc6U",
    authDomain: "whatsapp-mern-bf6cc.firebaseapp.com",
    projectId: "whatsapp-mern-bf6cc",
    storageBucket: "whatsapp-mern-bf6cc.appspot.com",
    messagingSenderId: "916352328180",
    appId: "1:916352328180:web:05f0ca9ae67a03b34f59a1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth();
GoogleAuthProvider();

export{ auth , provider };
export default db;