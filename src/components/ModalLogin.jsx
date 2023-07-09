"use client"

import styles from './styles/ModalLogin.module.css';
import { login } from '@/controllers/serviceUser';


export default function ModalLogin({ isOpen, onClose, }) {
    
    if (!isOpen) {
        return null;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const email = formData.get('email')
        const password = formData.get('password')

        try {

            if (email === '' || password === '') {
                alert('Por favor, rellene todos los campos');
                return;
            }

            const response = await login({ email, password });
            console.log(response.data ,response.data.user.email)
            if (response.status === 200){
                
                const token = response.data.token;
                alert("Inicio de sesión exitoso")
                
                localStorage.setItem('token', token);

                //pushear a la vista principal
            }else{
                alert("Inicio de sesión fallido")
            }

        } catch (error) {
            console.log(`%cError al Iniciar sesión: ${error}`, 'color: yellow')
            alert('Error al Iniciar sesion');
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalcontent}>
                <button
                    className={styles.modalclose} onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
                <div className={styles.modalimage}>
                    <img className={styles.img} src="https://i.ibb.co/K7Htms6/OIG.jpg" alt="Imagen" />
                </div>




                <div className={styles.modalform}>

                    <form className={styles.loginform} onSubmit={handleSubmit}>
                        <h2 className={styles.welcome}>Bienvenido de Nuevo</h2><br />

                        <div>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input
                                        class="input"
                                        type="email"
                                        placeholder="Ingrese su correo"
                                        name='email'
                                    />

                                    <span class="icon is-small is-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg>
                                    </span>

                                </p>
                            </div>
                            <div class="field">
                                <p class="control has-icons-left">
                                    <input
                                        class="input"
                                        type="password"
                                        placeholder="Ingrese su scontraseña"
                                        name='password'
                                    />
                                    <span class="icon is-small is-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </svg>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <br />
                        <button className={styles.boton} type="submit">
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

