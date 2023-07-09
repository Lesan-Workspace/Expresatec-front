"use client"
import { useState } from "react";
import ModalLogin from "@/components/ModalLogin";
import { Landingnavbar } from "@/components/Landingnavbar"
import { ColumnView } from "@/components/ColumnView";
export default function UnauthenticatedPage() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="login">
            <div className="hero">

                <Landingnavbar
                    openModal={openModal}
                />

                <section className="hero1 mt-8">
                    <h1 className="welcome">ExpresaT</h1>
                    <h2 className="welcome2">Porque las emociones de los niños <br /> <b id="no">NO</b>  tienen limites</h2>
                    <br />
                    <button className="buttoninfo" onClick={openModal} >Comenzar</button>
                </section>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F4F2F2" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,229.3C640,235,800,277,960,282.7C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

            </div>

            <ModalLogin
                isOpen={isOpen}
                onClose={closeModal}
            />
            <center>
                <div>
                    <h1 className="who">¿Quienes somos?</h1>
                </div>

                <ColumnView direccion="left" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolore quod placeat odit animi vitae voluptatum doloribus aliquid accusantium inventore magni voluptatem aliquam error eaque maxime. Ut repellat suscipit ab." img="https://i.ibb.co/TW6FSLM/b18cb84a-1a2e-41db-a87a-dae144f02303.jpg" />
                <ColumnView direccion="right" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolore quod placeat odit animi vitae voluptatum doloribus aliquid accusantium inventore magni voluptatem aliquam error eaque maxime. Ut repellat suscipit ab." img="https://i.ibb.co/dMQ133s/c050ef63-3705-4f7a-921d-7de218d38b1d.jpg" />
                <ColumnView direccion="left" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolore quod placeat odit animi vitae voluptatum doloribus aliquid accusantium inventore magni voluptatem aliquam error eaque maxime. Ut repellat suscipit ab." img="https://th.bing.com/th/id/OIG.NzFN5H2G_Gg6Ds4VDbRP?pid=ImgGn" />

            </center>






        </div>



    )
}