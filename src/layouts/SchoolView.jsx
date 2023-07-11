"use client"
import styles from './styles/schoolview.module.css'
import CameraCapture from '../components/cameraCapture'

export function SchoolView() {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.game}>

                        <div class="grid grid-rows-2 grid-flow-col gap-3">
                            <div class="row-span-3 ..."><img src="https://th.bing.com/th/id/R.b0d52e579a52005fa27aa470a99525e7?rik=OHJazhwW6O67Nw&pid=ImgRaw&r=0" width='800px' alt="" /></div>
                            <div class="row-span-2  col-span-2 ..."><CameraCapture /></div>
                            <div class=" selection col-span-2 ...">

                                <div class="grid grid-cols-3 gap-1">
                                    <div class="col-start-1 col-span-4 ..."><p>Tambien puedes marcar</p></div>
                                    <div class="...">
                                        <img src="https://i.ibb.co/Mc7Y0K2/image-removebg-preview-52.png" width={90} alt="" />
                                    </div>
                                    <div class="...">
                                        <img src="https://i.ibb.co/VVSTzFL/image-removebg-preview-54.png" width={90} alt="" />
                                    </div>
                                    <div class="...">
                                        <img src="https://i.ibb.co/SXx2kwq/image-removebg-preview-55.png" width={90}  alt="" /></div> 

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}