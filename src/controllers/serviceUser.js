
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

const baseUrlRegister = "http://localhost:5000/api/register";
const baseUrlLogin = "http://localhost:5000/api/login";


const register = async (email, password) => {
   createUserWithEmailAndPassword(auth, email, password)
}




const logout = () => {
   localStorage.removeItem('token')

   
}




export {
   logout,
   register
}