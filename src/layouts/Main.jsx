import styles from './styles/main.module.css'
import { Navigation } from '@/components/Navigation'
export function Main() {
    return (
        <div >
            
            <div className={styles.hero}>
                <section className={styles.profile}>
                    <span className={styles.textos}>Bienvenido de nuevo</span><br />
                    <div className={styles.contenedor}>

                        <div className={styles.card}>
                            <img className={styles.cardimage} src="https://i.ibb.co/qWwFr3D/R.png" alt="Image" />
                            <div className={styles.cardcontent}>
                                <h2 className={styles.cardtitle}>Profile name</h2>
                                <p claclassNames={styles.cardtext}>Read more</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}