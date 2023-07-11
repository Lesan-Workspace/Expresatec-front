"use client"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import axios from "axios";

const EMOTION_API_BASE_URL = '3.15.204.80';






const sendImage = async (image) => {
    try {
        const response = await axios.post(EMOTION_API_BASE_URL, image);
        return response
    } catch (error) {
        console.log(error);
    }
};



const register = async (email, password) => {
    try {
        const reg = await createUserWithEmailAndPassword(auth, email, password);
        console.log(reg);

        const token = await auth.currentUser.getIdToken();
        localStorage.setItem('token', token);

        // Realizar la redirección después de 2 segundos
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    } catch (error) {
        console.log(error);
    }
};

const loginUser = async (email, password) => {
    try {
        const reg = await signInWithEmailAndPassword(auth, email, password)
        console.log(reg);

        const token = await auth.currentUser.getIdToken();
        localStorage.setItem('token', token);


        setTimeout(() => {
            window.location.href = '/';
        }, 1000);


    } catch (error) {
        if (error.code === 'auth/user-not-found') {
           alert('La cuenta de usuario no existe');
          } else {
            console.log('Error durante el inicio de sesión:', error);
          }
       
    }


}

const logout = () => {
    try {
        window.location.href = '/login';
        localStorage.removeItem('token')

        setTimeout(() => {
            signOut(auth)
        }, 6000);
    } catch (error) {
        console.log(error);
    }
}

const handleAuthState = (state1, state2) => {
    onAuthStateChanged(auth, currentUser => {
        state1(currentUser)
        state2(false)
    })

}

export {
    handleAuthState,
    register,
    loginUser,
    logout,
    sendImage,
    
}