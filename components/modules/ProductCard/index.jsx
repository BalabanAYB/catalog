import React, {useEffect, useState} from 'react';
import styles from './ProductCard.module.scss';
import {useSelector} from "react-redux";
import {selectDesktopDevice, selectMobileDevice, selectTabletDevice} from "../../../store/device/selectors";
import Button from "../../ui/Button/Button";
import clsx from "clsx";

const ProductCard = ({data}) => {

    const isMobile = useSelector(selectMobileDevice)
    const isTablet = useSelector(selectTabletDevice)
    const isDesktop = useSelector(selectDesktopDevice)
    const styleMobile = isMobile ? styles.mobile : null

    const [img, setImg] = useState(data.image.desktop.x1)

    useEffect(() => {
        if (isDesktop) {
            setImg(data.image.desktop.x1)
        } else if (isTablet) {
            setImg(data.image.tablet.x1)
        } else if (isMobile) {
            setImg(data.image.mobile.x1)
        }
    }, [isDesktop, isTablet, isMobile])


    return (
        <>
            <div className={clsx(styles.wrapper, styleMobile)}>
                {data.is_new && !isMobile && <div className={styles.isNew}>Новинка</div>}
                <img className={clsx(styles.image, styleMobile)} src={img} alt=""/>
                <div className={clsx(styles.productDescriptionBlock, styleMobile)}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <div className={styles.descriptionBlock}>
                        <p className={styles.price}>{`${data.price.split('.')[0]} ₽`}</p>
                        {data.is_second_hand && <p className={styles.newState}>Новое</p>}
                    </div>
                    <div className={styles.footerCard}>
                        <Button>В корзину</Button>
                        {data.in_stock && <span className={styles.iconHeart}/>}
                    </div>
                </div>
                {isMobile && <span className={styles.line}/>}
            </div>
        </>
    )
}

export default ProductCard