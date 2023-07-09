"use client"
import { useState } from "react"
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
export function Landingnavbar({ openModal }) {

    const [isOpen1, setIsOpen1 ] = useState(false)

    const openModal1 = () => {
        setIsOpen1(true);
    };


    const closeModal1 = () => {
        setIsOpen1(false);
    };



    return (
        <header className="">
            <nav className="flex justify-between items-center px-4 py-2">
                <div>
                    <img src="https://i.ibb.co/zP2fkYq/logotipo.png" style={{ width: 45 }} alt="" />
                </div>
                <div className="flex items-center mt-3 ">
                    <div className="mx-4">
                        <button className="underline hover:text-purple-800 font-semibold" style={{ textDecoration: 'none', color: "white" }} onClick={openModal}>Sign In</button>
                    </div>
                    <div className="mx-4">
                        <button className="underline hover:text-purple-800 font-semibold" style={{ textDecoration: 'none', color: "white" }} onClick={openModal1}>Sign Up</button>
                    </div>
                </div>

            </nav>
            
            <ModalRegister
                isOpen1={isOpen1}
                onClose1={closeModal1}
            />
        </header>

    )
}




