import {setDeviceAction} from "../store/device/actions";

export const handleResizeDevice = (dispatch) => () => {
    const width = window.innerWidth
    if (width <= 768) {
        dispatch(
            setDeviceAction({ mobile: true, tablet: false, desktop: false })
        )
    }
    else if (width > 768 && width <= 1024) {
        dispatch(
            setDeviceAction({ mobile: false, tablet: true, desktop: false })
        )
    }
    else if (width > 1024) {
        dispatch(
            setDeviceAction({ mobile: false, tablet: false, desktop: true })
        )
    }
}