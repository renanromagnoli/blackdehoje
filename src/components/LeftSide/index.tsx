import Button from './Categories/Button'
import { Categories } from './Categories'
import { Filters } from './Filters'
import styles from './styles.module.scss'

// const categories = ['Tecnologia', 'Moda', 'Higiene']

export function LeftSide() {
    return (
        <div className={styles.sideLeft}>
            <Filters />
            <nav>
                <Categories/>
                {/* <ul>
                    <li>Categoria 1</li>
                    <li>Categoria 2</li>
                    <li>Categoria 3</li>
                    <li>Categoria 4</li>
                    <li>Categoria 5</li>
                </ul> */}
            </nav>
        </div>
    )
}