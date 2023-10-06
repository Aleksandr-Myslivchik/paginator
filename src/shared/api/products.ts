import {API_URL} from "@/shared/config";
import {ProductList} from "./models";
import {get} from "./base";

export type ProductsSearchType = {
    limit?: string;
    skip?: string
}

export const getProducts = async (params: ProductsSearchType): Promise<ProductList> => {
    const path = new URL('/products', API_URL)
    const searchParams = new URLSearchParams(params);
    path.search = searchParams.toString()

    try {

        const data = await get(path.href)
        return await data.json()

    } catch (e) {
        return Promise.reject(e)
    }

}

