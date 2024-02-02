import Single from '@/pages/[single]'
import {axiosProductInstance } from '../axiosInstance/fetchproducts'
import { HttpStatusCode } from "axios"

interface BaseApiResponse {
    status:HttpStatusCode
    data:any
}

export const fetchProducts = () => {
    return axiosProductInstance.get("/products")
}
export const fetchSingleProducts = async(id : number) => {
    const res =await axiosProductInstance.get(`/products/${id}`)
    return res.data
}