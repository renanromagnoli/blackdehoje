import styles from './styles.module.scss'
import SearchIcon from '@mui/icons-material/Search';

export function Header() {
    return (
        <header>
            <div className={styles.logo}></div>
            <div className={styles.search}>
                <SearchIcon fontSize='small' style={{color: '#202020'}}/>
                <input type="search" name="search" id="input--search" />
            </div>
        </header>
    )
}