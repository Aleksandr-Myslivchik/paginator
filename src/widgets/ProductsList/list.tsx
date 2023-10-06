import styles from "./styles.module.css";
import {Product} from "@/shared/api";
import React from "react";
import {ProductCard} from "@/entities/product";

type Props = {
    products: Product[]
}

export const List: React.FC<Props> = ({products}) => {
    return (
        <div className={styles.productsList}>

                {products.map((product) => (
                    <ProductCard data={product} key={product.id}/>

                ))}
        </div>
    );
};
