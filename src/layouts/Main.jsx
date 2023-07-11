"use client"
import styles from './styles/main.module.css'
import { handleAuthState } from '@/controllers/AuthService'
import { useState } from 'react'

export function Main() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    handleAuthState(setUser, setLoading);
    console.log(user)

    return (
        <div >
            <div className={styles.hero}>
                <section className={styles.profile}>
                    <span className={styles.textos}>Bienvenido de nuevo </span><br />
                    <div className={styles.contenedor}>

                        <div className={styles.card}>
                            <img className={styles.cardimage} src="https://i.ibb.co/qWwFr3D/R.png" alt="Image" />
                            <div className={styles.cardcontent}>
                                <h2 className={styles.cardtitle}>{(loading) ? 'cargando....' : user.email}</h2>
                                <p claclassNames={styles.cardtext}>{(loading) ? 'cargando....' : user.providerId}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}