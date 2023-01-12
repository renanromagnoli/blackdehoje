import styles from './styles.module.scss'

function BannerSquare() {
    return (
        <div className={styles.bannerSquare}></div>
    )
}

function BannerColumn() {
    return (
        <div className={styles.bannerColumn}></div>
    )
}

export {
    BannerColumn, BannerSquare
}