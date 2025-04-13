// src/common/response/response.interface.ts

export enum HttpStatus {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}
export interface ApiResponse<T> {
    status: HttpStatus.OK | HttpStatus.BAD_REQUEST | HttpStatus.INTERNAL_SERVER_ERROR;
    message: string;
    data?: T;
}