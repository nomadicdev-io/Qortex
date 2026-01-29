// Error code types
type ErrorCode = 
  | 'NOT_FOUND'
  | 'TYPE_ERROR'
  | 'PARSE'
  | 'VALIDATION'
  | 'INTERNAL_SERVER_ERROR'
  | 'INVALID_COOKIE_SIGNATURE'
  | 'INVALID_FILE_TYPE'
  | 'UNKNOWN';

// Error object interface
interface ErrorObject {
  code?: string;
  status?: boolean;
  statusCode?: number;
  message?: string;
  description?: string;
  errors?: Record<string, any>;
  [key: string]: any; // Allow additional properties
}

// Error response interface
interface ErrorResponse {
  error: boolean;
  code: string;
  status: boolean;
  statusCode: number;
  message: string;
  description: string;
  timestamp: string;
  requestURL: string;
  errors?: Record<string, any>;
  [key: string]: any; // Allow additional properties
}

// Request interface (minimal for Elysia)
interface Request {
  url: string;
  [key: string]: any; // Allow additional request properties
}

// Server interface (minimal for Elysia)
interface Server {
  requestIP?: (request: Request) => { address?: string };
  [key: string]: any; // Allow additional server properties
}

// Status function type
type StatusFunction = (statusCode: number, data: ErrorResponse) => ErrorResponse;

// Handler parameters interface
interface DefaultErrorHandlerParams {
  code: ErrorCode;
  error: ErrorObject;
  status: StatusFunction;
  request: Request;
  server: Server;
}

const defaultErrorHandler = ({ code, error, status, request, server }: DefaultErrorHandlerParams) => {

    if(error.code) {
      return status(error.statusCode || 400, {
        error: true,
        code: error.code || 'UNKNOWN',
        status: error.status || false,
        statusCode: error.statusCode || 400,
        message: error.message || 'Unknown Error 😔',
        description: error.description || 'Unknown Error 😔',
        timestamp: new Date().toISOString(),
        requestURL: request.url,
        data: undefined,
        ...error,
      })
    }
    switch(code) {
      case 'NOT_FOUND':
        return status(404, {
          error: true,
          code: 'NOT_FOUND',
          status: false,
          statusCode: 404,
          message: 'Not Found 😔',
          description: error.description || 'The requested resource was not found.',
          timestamp: new Date().toISOString(),
          requestURL: request.url,
          data: undefined,
          errors: error.errors || {},
      })
      case 'TYPE_ERROR':
        return status(422, {
          error: true,
          code: 'TYPE_ERROR',
          status: false,
          statusCode: 422,
          message: 'Type Error 😔',
          description: error.description || 'The type of the request is invalid.',
          timestamp: new Date().toISOString(),
          requestURL: request.url,
          data: undefined,
          errors: error.errors || {},
      })
      case 'PARSE':
        return status(400, {
          error: true,
          code: 'PARSE',
          status: false,
          statusCode: 400,
          message: 'Parse Error 😔',
          description: error.description || 'The request was invalid.',
          timestamp: new Date().toISOString(),
          requestURL: request.url,
          data: undefined,
          errors: error.errors || {},
        })
      case 'VALIDATION':
        return status(400, {
          error: true,
          code: 'VALIDATION',
          status: false,
          statusCode: 400,
          message: 'Validation Error 😔',
          description: error.description || 'The request was invalid.',
          timestamp: new Date().toISOString(),
          requestURL: request.url,
          data: undefined,
          errors: error.errors || {},
        })
      case 'INTERNAL_SERVER_ERROR':
        return status(500, {
          error: true,
          code: 'INTERNAL_SERVER_ERROR',
          status: false,
          statusCode: 500,
          message: 'Internal Server Error 😔',  
          description: error.description || 'The server encountered an error.',
          timestamp: new Date().toISOString(),
          requestURL: request.url,
          data: undefined,
          errors: error.errors || {},
        })
      case 'INVALID_COOKIE_SIGNATURE':
        return status(400, {
          error: true,
          code: 'INVALID_COOKIE_SIGNATURE',
          status: false,
          statusCode: 400,
          message: 'Invalid Cookie Signature 😔',
          description: error.description || 'The cookie signature is invalid.',
          timestamp: new Date().toISOString(),
          requestURL: request.url,
          data: undefined,
          errors: error.errors || {},
        })
      case 'INVALID_FILE_TYPE':
        return status(400, {
          error: true,
          code: 'INVALID_FILE_TYPE',
          status: false,
          statusCode: 400,
          message: 'Invalid File Type 😔',
          description: error.description || 'The file type is invalid.',
          timestamp: new Date().toISOString(),
          requestURL: request.url,
          data: undefined,
          errors: error.errors || {},
        })
      case 'UNKNOWN':
        return status(error?.statusCode || 400, {
          error: true,
          code: 'UNKNOWN',
          status: false,
          statusCode: error?.statusCode || 400,
          message: error?.message || 'Unknown Error 😔',
          description: error?.description || 'Unknown Error 😔',
          timestamp: new Date().toISOString(),
          requestURL: request.url,
          data: undefined,
          errors: error.errors || {},
        }
      )
      default:
        return {
          error: true,
          code: 'UNKNOWN',
          status: false,
          statusCode: error?.code || 500,
          message: 'Something went wrong 😔',
          description: error?.description || 'Something went wrong 😔',
          timestamp: new Date().toISOString(),
          requestURL: request.url,
          data: undefined,
          errors: error.errors || {},
        }
    }
}
  
export default defaultErrorHandler;

// Export types for use in other files
export type { ErrorCode, ErrorObject, ErrorResponse, Request, Server, StatusFunction, DefaultErrorHandlerParams };