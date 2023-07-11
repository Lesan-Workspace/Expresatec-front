import { useState, useRef } from 'react';
import { useEffect } from 'react';

const CameraCapture = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [button, setButton] = useState(false);
    const [imageData, setImageData] = useState(null);
    let cameraStream = null;
    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            cameraStream = stream; // Asignar el stream a la variable de referencia

            setCameraActive(true);
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const captureImage = () => {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        setImageData(dataUrl);
        setButton(true)

    };

    const retakePhoto = () => {
        setImageData(null);
    };

    useEffect(() => {
        return () => {
            // Detener y liberar el stream de la cámara cuando el componente se desmonte
            if (cameraStream) {
                cameraStream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <div>

            {!imageData && (
                <>
                    <div class="grid grid-cols-2 gap-1">
                        <div id='buttoncamera' class="col-start-1">
                            <center>
                                <button onClick={startCamera} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Prender Camara
                                </button>
                            </center>

                        </div>
                        <div class="col-end-3">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={captureImage}>Capture Image</button>
                        </div>
                        <div className='col-start-1 col-end-3 size-data'>
                            <video className='videocam' ref={videoRef} autoPlay />
                        </div>

                    </div>
                </>
            )}
            {imageData && (
                <>
                    <canvas ref={canvasRef} width={400} height={400} style={{ display: 'none' }} />

                   
                    <div class="grid grid-cols-2 gap-1">
                        <div id='buttoncamera' class="col-start-1">
                            <center>
                                <button onClick={retakePhoto} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Volver a tomar foto
                                </button>
                            </center>

                        </div>

                        <div class="col-end-3">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={captureImage}>Enviar</button>
                        </div>
                        <div  className='col-start-1 col-end-3 '>
                            <img src={imageData} alt="Captured Image" width="340px" height='255px' />
                        </div>

                    </div>
                </>
            )}
        </div>
    );
};

export default CameraCapture;