import clsx from 'clsx'
import styles from './Button.module.css';

function ButtonClsx() {
    return (
        <>
            <button className={styles.btn}>
                Click me!
            </button>

            {/* khi không có clsx */}
            <button className={`${styles.btn} ${styles.active}`}>
                Click me!
            </button>
            <button className={[styles.btn, styles.active].join(' ')}>
                Click me!
            </button>

            {/* có clsx */}
            <button className={clsx(styles.btn, styles.active, {
                [styles.active1]: true
            })}>
                Click me!
            </button>
        </>
    )
}

export default ButtonClsx
