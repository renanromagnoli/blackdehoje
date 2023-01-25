import { memo } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
    title: string
}


function Button({title}: ButtonProps) {
    return (
        <div className={styles.buttonContainer} onClick={() => console.log('button: ', title)}>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default memo(Button)