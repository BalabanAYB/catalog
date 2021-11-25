import Head from 'next/head'
import styles from './catalog.module.scss'
import url from "url";
import {fetchCatalogData} from "../../../store/catalog/actions";
import {initializeStore} from "../../../store/store";
import Layout from "../../../components/layouts/main/Layout";
import CardList from "../../../components/modules/CardList";
import {useSelector} from "react-redux";
import selectCatalogData from "../../../store/catalog/selectors";

export default function CatalogPage() {

    const catalogData = useSelector(selectCatalogData);

    return (
        <div className={styles.container}>
            <Head>
                <title>Каталог</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <CardList catalogData={catalogData}/>
            </Layout>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const reduxStore = initializeStore();
    const {dispatch} = reduxStore;

    const {pathname} = url.parse(ctx.resolvedUrl);

    const path = pathname.split('/')[2]

    const promisesArray = [
        dispatch(fetchCatalogData(path))
    ];

    await Promise.all(promisesArray);

    return {
        props: {
            initialReduxState: reduxStore.getState(),
        },
    };
};
