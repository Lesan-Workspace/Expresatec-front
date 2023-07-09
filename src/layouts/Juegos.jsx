import styles from './styles/juegos.module.css'
import { CardView } from "@/components/CardView"
export function Juegos() {
    return (
        <div >
            <div className={styles.hero}>
                <div className={styles.juegos}>
                    <div class="grid grid-cols-8 gap-9">
                        <div class="col-start-4 col-end-5"><CardView imagen="https://i.ibb.co/kmG6Df2/539ce7cf-79a5-403f-841e-f66d17017837.jpg" /></div>
                        <div class="col-start-2 "><CardView imagen="https://i.ibb.co/kSX7LDn/54ee806a-c8ed-40cd-a98f-b16330ddc606.jpg" /></div>
                        <div class="col-end-7 "><CardView imagen="https://i.ibb.co/kSX7LDn/54ee806a-c8ed-40cd-a98f-b16330ddc606.jpg" /></div>
                        
                    </div>

                   

                </div>
            </div>


        </div>
    )
}