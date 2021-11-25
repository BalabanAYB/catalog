import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout from "../components/layouts/main/Layout";
import url from "url";
import {initializeStore} from "../store/store";
import {fetchFeedbackData} from "../store/catalog/actions";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;

    const { pathname } = url.parse(ctx.resolvedUrl);


    return {
        props: {
            initialReduxState: reduxStore.getState(),
        },
    };
};
