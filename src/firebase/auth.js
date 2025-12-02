import {auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword as firebaseCreateUser , GoogleAuthProvider,  signInWithEmailAndPassword as firebaseSignIn,  signInWithPopup} from "firebase/auth";

export const createUserWithEmailAndPassword = async (email, password) => {
    return firebaseCreateUser(auth, email, password);
}

export const signInWithEmailAndPassword = async (email, password) => {
    return firebaseSignIn(auth, email, password);
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    //result.user
    return result;
}

export const signOutUser = async () => {
    return auth.signOut();
}

