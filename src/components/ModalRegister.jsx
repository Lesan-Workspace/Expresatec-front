import styles from './styles/ModalRegister.module.css'
import { useState } from 'react'
import { register } from '@/controllers/serviceUser'
import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'

export default function ModalRegister({ isOpen1, onClose1, children }) {
    if (!isOpen1) {
        return null
    }
    const [passwordMatch, setPasswordMatch] = useState(true)
    const { push } = useRouter();
    const getprinttoken = () => {
        const token = localStorage.getItem('token');
        console.log(token);
    
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const email = formData.get('email')
        const password = formData.get('password')
        const repeatpass = formData.get('repeatpass')

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres')
            return
        }
        if (password === repeatpass) {
            setPasswordMatch(true)

            try {
                register(email, password)
                
                const token = await auth.currentUser.getIdToken();
                localStorage.setItem('token', token);
                push('/');


            } catch (error) {
                console.log(` error : ${error}`)
                
            }

        } else {
            setPasswordMatch(false)
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalcontent}>
                <button
                    className={styles.modalclose} onClick={onClose1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
                <div className={styles.modalimage}>
                    <img className={styles.img} src="https://i.ibb.co/1Ljr66D/ee0bc4dd-5fef-42ae-b834-7bbf5bb6764c.jpg" alt="Imagen" />
                </div>
                <div className={styles.modalform}>
                    <form className={styles.loginform} onSubmit={handleSubmit}>
                        <center>
                            <h2 className={styles.welcome}>Crea tu cuenta YAAAA!!!!</h2><br />
                        </center>
                        


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
                            <div class="field">
                                <p class="control has-icons-left">
                                    <input
                                        class="input"
                                        type="password"
                                        placeholder="Repita su contraseña"
                                        name='repeatpass'
                                    />
                                    <span class="icon is-small is-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                                            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                    </span>
                                </p>
                            </div>
                        </div>

                        {!passwordMatch && <p className={styles.errorpass}>Las contraseñas no coinciden.</p>}

                        <br />
                        <button className={styles.boton} type="submit">
                            Iniciar sesión
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}