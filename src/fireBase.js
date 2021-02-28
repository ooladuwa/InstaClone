import firebase from "firebase";

  const firebaseApp = firebase.initializeApp=({
    apiKey: "AIzaSyDyCZAswIfZkj9co3Co1o-B403JH3ZkwAQ",
    authDomain: "insta-clone-d3ca6.firebaseapp.com",
    databaseURL: "https://insta-clone-d3ca6-default-rtdb.firebaseio.com",
    projectId: "insta-clone-d3ca6",
    storageBucket: "insta-clone-d3ca6.appspot.com",
    messagingSenderId: "312332129745",
    appId: "1:312332129745:web:9222a3c516ebe46b02fcf0",
    measurementId: "G-R3L214J94B"
  })

  const db = firebaseApp.fireStore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};


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

