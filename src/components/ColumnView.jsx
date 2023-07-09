export function ColumnView(props) {

    if (props.direccion === 'left') {
        return (
            <>
                <br />
                <br />
                <div class="grid grid-cols-2 gap-5 ">
                    <div className="sections1" >
                        <h2>{props.text}</h2>

                    </div>
                    <div className="sections"  >
                        <img src={props.img} width='400px' />
                    </div>
                </div>

            </>
        )
    } else if (props.direccion === 'right') {
        return (
            <>
                <br />
                <br />
                <div class="grid grid-cols-2 gap-5 ">
                    <div className="sections"  >
                        <img src={props.img} width='400px' />
                    </div>
                    <div className="sections1" >
                        <h2>{props.text}</h2>
                    </div>
                </div>


            </>
        )
    }




}