import styles from './styles/CardView.module.css'
export function CardView(props) {
    return (
        <div>

            <div className={styles.card}>
                <a href="/" >
                    <div className={styles.cardimage}>
                        <img src={props.imagen} alt="Image" />
                    </div>
                    <div className={styles.cardcontent}>
                        <h2 className={styles.cardtitle}>Can life make you a bitter developer?</h2>
                        <p className={styles.cardtext}>Read more</p>
                    </div>
                </a>
            </div>


        </div>
    )

}