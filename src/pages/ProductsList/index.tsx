import styles from './styles.module.css'
import {ProductsList} from "@/widgets/ProductsList";

export const ProductsListPage = () => {

    return (
        <section className={styles.container}>
            <ProductsList/>
        </section>
    );
};

