export type Product = {
    id: number;
    title: string;
    price: string;
    thumbnail: string;
    images: string[];
}

export type ProductList = {
    products: Product[]

    total: number;
    skip: number;
    limit: number;
}
