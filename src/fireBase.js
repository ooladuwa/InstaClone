import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBe7yNY2IamPDa8-G3n24dx_1kvri7DS_I",
  authDomain: "instagram-clone-77f24.firebaseapp.com",
  projectId: "instagram-clone-77f24",
  storageBucket: "instagram-clone-77f24.appspot.com",
  messagingSenderId: "514012704519",
  appId: "1:514012704519:web:2bdc7f1a903a9af5c99fa2",
  measurementId: "G-010D9CP121",
});

const db = firebaseConfig.fireStore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// step 2:
//    import {db} from "firebase";

// step1:
//   use a useEffect in the app that its rendering in.

//  useEffect(()=>{
//   step3: db.collection("posts").onSnapshot(snapshot)
// setPosts(snapshot.docs.map(doc => doc.data()));

// },[]);

// to pull individual ids:

//  useEffect(()=>{
//   step3: db.collection("posts").onSnapshot(snapshot)
// setPosts(snapshot.docs.map(doc =>
// id: doc.id,
// post: doc.data()
// ));

//     the map:

//   [ above the return & jsx:]
//     posts.map(({id,post})=>{
//     <post key ={id} username={username} caption={caption}/>
//     })

// },[]);

// to pull stuff from the database:
