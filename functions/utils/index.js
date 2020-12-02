const returnSuccess = (res, data, status=200) => {
    let result;

    if(data) {
        result = {
            status: 'OK',
            data: data
        };
    } else {
        result = {
            status: 'OK'
        };
    }

    return res.status(status).send(result);
}

const returnError = (res, message = '', status) => {
    let result = {
        status: 'ERROR',
        message: message
    };
   
    return res.status(status).send(message);
} 

export { returnSuccess, returnError }