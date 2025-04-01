import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";


export async function loginFirebase(email, password){
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredentials.user
        return user
    
} 


export async function signupFirebase(email,password,fname,lname){
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredentials.user
        setDoc(doc(db,"users",user.uid),{
            uid: user.uid,
            email,
            fname,
            lname,
            tasks: []
        })    
}


export async function getLoggedUser(){
    return auth.currentUser
}

export async function getUserData(uid){
    const data = await getDoc(doc(db,"users",uid))
    const userSnapShot = data.data()
    return userSnapShot 
}
