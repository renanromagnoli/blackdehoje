import styles from './styles.module.scss'

export function LeftSide() {
    return (
        <div className={styles.sideLeft}>
            <nav>
                <ul>
                    <li>Categoria 1</li>
                    <li>Categoria 2</li>
                    <li>Categoria 3</li>
                    <li>Categoria 4</li>
                    <li>Categoria 5</li>
                </ul>
            </nav>
        </div>
    )
}