import clsx from "clsx";
import styles from './Button.module.scss'


const Button = ({className, onClick, disabled, children}) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx(styles.button, className)}>
            {children}
        </button>
    )
}

export default Button