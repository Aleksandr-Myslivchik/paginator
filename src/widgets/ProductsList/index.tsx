import React, {useState} from "react";
import {useProducts} from "@/entities/product";
import ReactPaginate from "react-paginate";
import {List} from "@/widgets/ProductsList/list";

import styles from './styles.module.css'

export const ProductsList = () => {
    const [paginationData, setPaginationData] = useState({
        limit: 10,
        skip: 0
    })
    const [currentPage, setCurrentPage] = useState(1)

    const {productsData, error, isLoading} = useProducts(paginationData)

    const handlePageClick = (event: { selected: number }) => {

        const selectedPageIndex = event.selected
        const newOffset = selectedPageIndex * paginationData.limit

        setPaginationData((prevState) => ({...prevState, skip: newOffset}))
        setCurrentPage(selectedPageIndex + 1)
    };

    const pageCount = Math.ceil((productsData?.total || 0) / paginationData.limit);

    const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>)=> {
        setPaginationData({limit: Number(event.target.value),skip: 0})
        setCurrentPage(1)
    }
    return (
        <div className={styles.products}>

            {isLoading ? <span>Loading</span> : null}
            {!isLoading && productsData ?
                <>
                    <div className={styles.filter}>
                        <label >Items per page</label>
                        <select defaultValue={10} onChange={handleLimitChange} name="limit" id='pagination-limit'>
                            <option value="5">5</option>
                            <option  value='10'>10</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                    <List products={productsData?.products[currentPage] || []}/>
                </>
                : null}
            {error ? <span>Something went wrong</span> : null}

            <ReactPaginate
                className={styles.paginator}
                nextClassName={styles.paginatorNext}
                previousClassName={styles.paginatorPrevious}
                pageLinkClassName={styles.paginatorPage}
                activeClassName={styles.paginatorSelected}
                forcePage={currentPage - 1}
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={paginationData.limit}
                pageCount={pageCount}
                previousLabel="< "
                renderOnZeroPageCount={null}


            />

        </div>
    );
};

