import React, {useEffect, useState} from 'react';
import styles from './FilterBlock.module.scss';
import Checkbox from "../../ui/Checkbox/Checkbox";
import {fetchCatalogData} from "../../../store/catalog/actions";
import {useDispatch} from "react-redux";
import useDebounce from "../../../utils/useDebounce";

const FilterBlock = ({filtersData, metaPath}) => {

    const [brands, setBrands] = useState(['1', '9'])
    const [minPrice, setMinPrice] = useState('0')
    const [maxPrice, setMaxPrice] = useState('499000')

    const dispatch = useDispatch()

    const debouncedMinPrice = useDebounce(minPrice, 800);
    const debouncedMaxPrice = useDebounce(maxPrice, 800);

    useEffect(() => {
        const price = {
            min: minPrice,
            max: maxPrice
        }

        dispatch(fetchCatalogData(null, metaPath, brands, price))
    }, [debouncedMinPrice, debouncedMaxPrice])

    const handleSubmit = (e) => {
        const price = {
            min: minPrice,
            max: maxPrice
        }
        if (e.type === 'checkbox') {
            if (e.checked) {
                setBrands([...brands, e.value])
                const copyBrands = [...brands, e.value]
                dispatch(fetchCatalogData(null, metaPath, copyBrands, price))
            }
            if (!e.checked) {
                const copyBrands = brands.filter(item => item !== e.value)
                setBrands(copyBrands)
                dispatch(fetchCatalogData(null, metaPath, copyBrands, price))
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Цена, ₽</h2>
            <label className={styles.label}>
                <input onChange={e => setMinPrice(e.target.value)} value={minPrice} name='minPrice'
                       className={styles.input} type="text"/>
                <input onChange={e => setMaxPrice(e.target.value)} value={maxPrice} name='maxPrice'
                       className={styles.input} type="text"/>
            </label>
            <h2 className={styles.titleFilter}>{filtersData.title}</h2>
            <div className={styles.checkboxesLabel}>
                {filtersData.items.map(item => <Checkbox onChange={handleSubmit} defaultChecked={item.main}
                                                         value={item.value} name={item.title}
                                                         className={styles.checkbox}
                                                         key={item.title} label={item.title}/>)}
            </div>
        </div>
    )
}

export default FilterBlock