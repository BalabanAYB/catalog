import clsx from "clsx";
import styles from './Layout.module.scss'
import LeftColumn from "../../modules/LeftColumn/LeftColumn";
import {useSelector} from "react-redux";
import selectCatalogData from "../../../store/catalog/selectors";
import {selectMobileDevice} from "../../../store/device/selectors";


const Layout = ({children}) => {

    const catalogData = useSelector(selectCatalogData);
    const isMobile = useSelector(selectMobileDevice);
    const styleMobile = isMobile ? styles.mobile : null

    return (
        <div
            className={clsx(styles.layout, styleMobile)}
        >
            <LeftColumn catalogData={catalogData}/>
            <main className={styles.rightColumn}>{children}</main>
        </div>
    );
};

export default Layout;