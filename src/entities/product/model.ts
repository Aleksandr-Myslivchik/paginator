import {useCallback, useEffect, useRef, useState} from "react";
import {Product} from "@/shared/api";
import {getProducts} from "@/shared/api/products";


export type ProductsStore = {
    products: Record<number, Product[]>
    total: number;
    skip: number;
    limit: number;
}

export const useProducts = ({limit, skip}: { limit: number, skip: number }) => {
    const [productsData, setProductsData] = useState<null | ProductsStore>(null)
    const [error, setError] = useState<any>(null)
    const [isLoading, setLoading] = useState<boolean>(true)

    const handleProducts = useCallback(async () => {
        const page = skip / limit + 1
        try {
            const {products, ...metaData} = await getProducts({limit: String(limit), skip: String(skip)})

            setProductsData(prevValue => {
                if (prevValue) {
                    return ({
                        products: {
                            ...prevValue.products,
                            [page]: products
                        },
                        ...metaData
                    })
                } else {
                    return ({
                        products: {
                            [page]: products
                        },
                        ...metaData
                    })
                }
            })

        } catch (e) {
            setProductsData(null)
            return Promise.reject(e)
        }
    }, [limit, skip])

    useEffect(() => {
        if (!isLoading) {
            return
        }


        handleProducts()
            .catch((e) => {
                setError(e)
            })
            .finally(() => {
                setLoading(false)
            })



    }, [isLoading])

    const initLimitValue = useRef(limit)

    useEffect(() => {
        const currentPage = skip / limit + 1

        //clear list if limit changed. total rests intact
        //and load data only if missed
        if (limit !== initLimitValue.current) {
            setProductsData(prevState => {
                if (!prevState) {
                    return prevState
                } else {
                    return ({...prevState, products: {}})
                }
            })

            initLimitValue.current = limit
            setLoading(true)
        }else if(!productsData?.products[currentPage]){

            setLoading(true)

        }

    }, [skip, limit])

    return {
        isLoading, error, productsData
    }

}