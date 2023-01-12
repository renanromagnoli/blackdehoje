import styles from './styles.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import { B30050 } from '../Banners';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.black}>BLACK</div>
                <div className={styles.hoje}>HOJE!</div>
            </div>
            <div className={styles.search}>
                <SearchIcon fontSize='small' style={{color: '#202020'}}/>
                <input className={styles.searchInput} type="search" name="search" id="input--search" />
            </div>
            <B30050 />
        </header>
    )
}