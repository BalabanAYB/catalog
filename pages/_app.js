import '../styles/globals.scss'
import {Provider} from "react-redux";
import {useStore} from "../store/store";
import {useEffect} from "react";
import {handleResizeDevice} from "../utils/handleResizeDevice";

function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState);
  const { dispatch } = store;
  const handleResize = handleResizeDevice(dispatch)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
