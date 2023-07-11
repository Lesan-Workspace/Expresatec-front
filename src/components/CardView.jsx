import styles from './styles/CardView.module.css'
import Link from 'next/link'
export function CardView(props) {
    return (
        <div>

            <div className={styles.card}>
                <Link href="/juegos/school1" >
                    <div className={styles.cardimage}>
                        <img src={props.imagen} alt="Image" />
                    </div>
                    <div className={styles.cardcontent}>
                        <h2 className={styles.cardtitle}>{props.titulo}</h2>
                        <p className={styles.cardtext}>Pruebalo</p>
                    </div>
                </Link>
               
            </div>


        </div>
    )

}