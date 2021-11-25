import React from 'react';
import styles from './CardList.module.scss';
import ProductCard from "../ProductCard";

const CardList = ({catalogData}) => {

    return (
        <div className={styles.wrapper}>
            {catalogData.products.map(item => <ProductCard key={item.id} data={item}/>)}
        </div>
    )
}

export default CardList