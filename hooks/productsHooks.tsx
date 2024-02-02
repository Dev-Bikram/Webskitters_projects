import {fetchProducts,fetchSingleProducts } from '../axiosCall/productsAxiosCall'
import { useQuery } from "react-query";


export function useGetProducts() {
    const {data, isLoading, error, isError} = useQuery({
        queryKey : ["products"],
        queryFn : fetchProducts
    })

    return {data, isLoading, error, isError}
}

export function useGetSingleProducts(id :number) {
    const {data, isLoading, error, isError} = useQuery({
        queryKey : [`singleproducts-${id}`],
        queryFn : () => fetchSingleProducts(id)
    })

    return {data, isLoading, error, isError}
}

