const Alert = ({alertMessage:alertMessage,alertColor:alertColor} ) => {
    return(
            <div className="alertStyle">
               
                <h2 className={alertColor}>{alertMessage}</h2>
            </div>
    )
    }
    export default Alert;