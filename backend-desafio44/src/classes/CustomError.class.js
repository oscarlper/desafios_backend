class ClassError {
    statusCodeClass() {
        this.statusCode = statusCode;
    }
}

class FactoryCustomError extends ClassError{
    constructor(data) {
        super()
    }
    getErrorMsg(data) {
            if(data == 200 ) return {errorCode:data,msg:'OK'}
            if(data == 201 ) return {errorCode:data,msg:'Created'}
            if(data == 400 ) return {errorCode:data,msg:'Bad Request'}
            if(data == 401 ) return {errorCode:data,msg:'Unauthorized (RFC 7235)'}
            if(data == 404 ) return {errorCode:data,msg:'Not Found'}
            else {
                return {errorCode:data, msg:'unknown error code'}
            }
    } 
}


export default FactoryCustomError;

// deberia generar clases para errores de consola, de log, verbose
// e instanciar las diferentes clases segun corresponde enviar el codigo 
// de error, mensaje y modo de visualizarlo.