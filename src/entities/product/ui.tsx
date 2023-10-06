import React from "react";
import styles from './styles.module.css'
import {Product} from "@/shared/api";

type ProductCardProps = {
    data: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    return (
        <div className={styles.productCard}>
            <img className={styles.media} alt={data.title} src={data.thumbnail}/>

            <div className={styles.content}>
                <span>{data.title}</span>
                <span>{data.price}$</span>
            </div>

        </div>
    );
};
