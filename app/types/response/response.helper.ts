// src/common/response/response.helper.ts

import { ApiResponse, HttpStatus } from "./response.interface";




/**
 * @description: Helper functions to create API responses
 * @param {T} data - The data to be included in the response
 * @param {string} message - The message to be included in the response
 * @returns {ApiResponse<T>} - The formatted API response
 */

export const successResponse = <T>(data: T, message: string = 'Thành công'): ApiResponse<T> => ({
    status: HttpStatus.OK,
    message,
    data,
});

export const errorResponse = (message = 'Lỗi xảy ra'): ApiResponse<null> => ({
    status: HttpStatus.BAD_REQUEST,
    message,
});