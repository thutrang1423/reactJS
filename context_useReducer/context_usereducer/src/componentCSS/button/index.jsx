import clsx from 'clsx'
import styles from './Button.module.css'

function Button({ primary }) {


    const classes = clsx(styles.btn, 'd-flex', { //nó sẽ hiểu luốn có d-flex trong tất cả các button
        [styles.primary]: primary, //qua file "./Button.module.css" thêm css cho 'styles.primary'
        //'d-flex': flase //chỉ có trong button primary
    })

    return (
        <button className={classes}>
            Click me!
        </button>
    )
}

export default Button
