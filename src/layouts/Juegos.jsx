import styles from './styles/juegos.module.css'
import { CardView } from "@/components/CardView"
export function Juegos() {
    return (
        <div >
            <div className={styles.hero}>
                <div className={styles.juegos}>
                    <div class="grid grid-cols-8 gap-9">
                        <div class="col-start-4 col-end-5"><CardView imagen="https://th.bing.com/th/id/OIG.ekL4pE91pGaWJ_mMw2FB?pid=ImgGn" titulo="En la escuela" /></div>
                        <div class="col-start-2 "><CardView imagen="https://th.bing.com/th/id/OIG.POAciSfoKZ6YnWLg15fA?pid=ImgGn" titulo="En el parque" /></div>
                        <div class="col-end-7 "><CardView imagen="https://th.bing.com/th/id/OIG.QBec.HTpOBquqHEEXyTJ?pid=ImgGn" titulo="Mascotas" /></div>
                        
                    </div>

                   

                </div>
            </div>


        </div>
    )
}