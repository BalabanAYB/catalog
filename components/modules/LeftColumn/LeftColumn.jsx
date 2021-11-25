import React from 'react';
import styles from './LeftColumn.module.scss';
import {declOfNum} from "../../../utils/helpers";
import FilterBlock from "../FilterBlock";
import {useSelector} from "react-redux";
import {selectMobileDevice} from "../../../store/device/selectors";
import clsx from "clsx";


const LeftColumn = ({catalogData}) => {

    const isMobile = useSelector(selectMobileDevice)
    const styleMobile = isMobile ? styles.mobile : null

    return (
        <div className={styles.wrapper}>
            <p className={styles.tag}>
                {`
             
              ${declOfNum(catalogData.meta.total, [
                    'Товар',
                    'Товара',
                    'Товаров',
                ])}
                ${catalogData.meta.total}
              `}
            </p>
            <h2 className={clsx(styles.title, styleMobile)}>Камеры</h2>
            <FilterBlock metaPath={catalogData.meta.path} filtersData={catalogData.filters[3]}/>
        </div>
    )
}

export default LeftColumn