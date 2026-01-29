function routeErrorHandler({ error }: { error: any }) {
    if (error.name === 'ValidationError') {
        const errors = {};
        
        Object.keys(error.errors).forEach((key) => {
          errors[key] = error.errors[key].message;
        });
        
        throw {
            status: false,
            code: 'VALIDATION_ERROR',
            statusCode: 400,
            message: 'Validation failed',
            description: 'One or more fields failed validation. Please check the errors object for details.',
            isValidationError: true,
            errors: errors
        }
    } 
    else throw error
}

export default routeErrorHandler