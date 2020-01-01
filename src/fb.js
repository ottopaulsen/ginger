import Firebase from "firebase";
import firebaseConfig from "./firebase-config";

const firebaseApp = Firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();

export default Firebase;
export { firestore };
