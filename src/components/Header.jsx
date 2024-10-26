import cartIcon from '/img/cart-icon.svg'
import searchIcon from '/img/search-icon.svg'
import userIcon from '/img/user-icon.svg'
import wishIcon from '/img/wish-icon.svg'



import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerInner}>

                <div className={styles.headerLogo}>
                    <h1>Art Shop</h1>
                </div>

                <div className={styles.headerColRight}>
                    <div className={styles.headerColRightWrap}>

                        <div className={styles.headerSearchButton}>
                            <a className={`${styles.headerButtonLink} ${styles.headerButtonLinkSearch}`} href="" aria-label="Search">
                                <img src={searchIcon} alt="Search module" />
                            </a>
                        </div>

                        <div className={styles.headerAuthButton}>
                            <a className={`${styles.headerButtonLink} ${styles.headerButtonLinkAccount}`} href="" aria-label="My Account">
                                <img src={userIcon} alt="User login" />
                            </a>
                        </div>

                        <div className={styles.headerWishlist}>
                            <a className={styles.headerButtonLink} href="" aria-label="Wishlist">
                                <img src={wishIcon} alt="Wishlist icon" />
                            </a>
                        </div>

                        <div className={styles.headerCart}>
                            
                            <a className={styles.headerButtonLink} aria-label="My Cart">
                                <img src={cartIcon} alt="Shop cart" />
                            </a>

                            <div className={styles.widgetShoppingCartContent}>

                                <ul className={styles.productListWidget}>
                                    <li className={`${styles.productListWidgetItem} ${styles.miniCartItem}`}>

                                        <div className={styles.productListWidgetWrap}>

                                            <div className={styles.productListWidgetThumbCol}>
                                                <a href="">
                                                    <img
                                                        src="https://cdn-icons-png.flaticon.com/128/10951/10951869.png"
                                                        className={`${styles.productListWidgetThumb} ${styles.productListWidgetThumbCover}`}
                                                        alt=""
                                                    />
                                                </a>
                                            </div>

                                            <div className={styles.productListWidgetTitleCol}>

                                                <div className={styles.productListWidgetTitle}>
                                                    <a href="">
                                                        Face Body Foundation
                                                    </a>
                                                </div>

                                                <div className={styles.productListWidgetPrice}>
                                                    <span>1 × <span><bdi><span>$</span>40.00</bdi></span></span>
                                                </div>

                                            </div>
                                            <a className={styles.productListWidgetRemove}> X </a>
                                        </div>
                                    </li>
                                    <li className={`${styles.productListWidgetItem} ${styles.miniCartItem}`}>

                                        <div className={styles.productListWidgetWrap}>

                                            <div className={styles.productListWidgetThumbCol}>
                                                <a href="">
                                                    <img
                                                        src="https://cdn-icons-png.flaticon.com/128/10951/10951869.png"
                                                        className={`${styles.productListWidgetThumb} ${styles.productListWidgetThumbCover}`}
                                                        alt=""
                                                    />
                                                </a>
                                            </div>

                                            <div className={styles.productListWidgetTitleCol}>

                                                <div className={styles.productListWidgetTitle}>
                                                    <a href="">
                                                        Airbrush Matte
                                                    </a>
                                                </div>

                                                <div className={styles.productListWidgetPrice}>
                                                    <span>1 × <span><bdi><span>$</span>40.00</bdi></span></span>
                                                </div>

                                            </div>
                                            <a className={styles.productListWidgetRemove}> X </a>
                                        </div>
                                    </li>
                                </ul>

                                <div className={styles.productListWidgetTotal}>
                                    <span className={styles.productListWidgetTotalTitle}>Subtotal:</span>
                                    <span className={styles.amount}>
                                        <bdi>
                                            <span>$</span>80.00
                                        </bdi>
                                    </span>
                                </div>


                                <div className={styles.productListWidgetButtons}>
                                    <a href="" className={styles.button}>
                                        View cart
                                    </a>
                                    <a href="" className={styles.button}>
                                        Checkout
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;