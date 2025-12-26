class ApiResponse {
    constructor(statusCode, data, message = "Request successful") {
        this.code = statusCode;
        this.data = data;
        this.success = statusCode >= 200 && statusCode < 400;
        this.message = message;
    }
}