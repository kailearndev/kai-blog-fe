import { Blog } from "../types/blog.type";
import { ApiResponse } from "../types/response/response.interface";
import apiConfig from "./api";

export const getAllBlogs = async (): Promise<ApiResponse<Blog[]>> => {
    try {
        const res = await apiConfig.get("/blog");
        return res.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }

}

export const getBlogDetail = async (id?: string): Promise<ApiResponse<Blog>> => {
    try {
        const res = await apiConfig.get(`/blog/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }

}