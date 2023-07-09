import styles from './styles/profile.module.css'
export function Profile() {
    return (
        <>
            <div className={styles.profile}>
                <section className={styles.container}>
                    <center>
                        <div className={styles.img}>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                        </div>

                    </center>
                    <div >
                        <label>Nombre de usuario</label><br />

                    </div>



                    <div className={styles.correo}>
                        <span>Correo:</span><br />
                        <label>Example@gmail.com</label><br />
                        
                    </div>



                </section>

            </div>
        </>
    )
}