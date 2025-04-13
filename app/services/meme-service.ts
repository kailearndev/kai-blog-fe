import { Blog } from "../types/blog.type";
import { ApiResponse } from "../types/response/response.interface";
import apiConfig from "./api";

export const getAllMeme = async (): Promise<ApiResponse<Blog[]>> => {
    try {
        const res = await apiConfig.get("/meme");
        return res.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }

}

export const getMemeDetail = async (id?: string): Promise<ApiResponse<Blog>> => {
    try {
        const res = await apiConfig.get(`/meme/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }

}