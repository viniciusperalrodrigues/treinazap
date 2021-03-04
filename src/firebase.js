import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyDTpNBypn_OOFKJ1bXIG0XGk9csWNchKYY",
    authDomain: "treinazap-4bb17.firebaseapp.com",
    projectId: "treinazap-4bb17",
    storageBucket: "treinazap-4bb17.appspot.com",
    messagingSenderId: "695657011820",
    appId: "1:695657011820:web:4465497420379accb11649"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
