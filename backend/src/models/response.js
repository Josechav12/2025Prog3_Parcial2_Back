class BackendResponse 
{
    constructor(error, message, content = []) 
    {
        this.error = error;
        this.message = message;
        this.content = content;
    }

    static generateResponse(errorEncontrado = false, message = 'OK', content = []) 
    {
        return new BackendResponse(errorEncontrado, message, content);
    }
}

module.exports = BackendResponse;