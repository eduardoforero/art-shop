import cartIcon from '/img/cart-icon.svg'
import searchIcon from '/img/search-icon.svg'
import userIcon from '/img/user-icon.svg'
import wishIcon from '/img/wish-icon.svg'
import styles from './Header.module.css'

function Header({ cart }) {

    const isEmpty = () => cart.length === 0
    const cartTotal = () => cart.reduce( (total, item) => total + (item.quantity * item.price), 0 )

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

                                {
                                    isEmpty() ?
                                        (
                                            <div className={styles.productListWidgetEmpty}>
                                                No products in the cart.
                                            </div>

                                        ) : (

                                            <>
                                                <ul className={styles.productListWidget}>

                                                    {cart.map(photo => (

                                                        <li key={photo.id} className={`${styles.productListWidgetItem} ${styles.miniCartItem}`}>

                                                            <div className={styles.productListWidgetWrap}>

                                                                <div className={styles.productListWidgetThumbCol}>
                                                                    <a href="">
                                                                        <img
                                                                            src={`/img/${photo.image}.jpg`}
                                                                            className={`${styles.productListWidgetThumb} ${styles.productListWidgetThumbCover}`}
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </div>

                                                                <div className={styles.productListWidgetTitleCol}>

                                                                    <div className={styles.productListWidgetTitle}>
                                                                        <a href="">
                                                                            {photo.name}
                                                                        </a>
                                                                    </div>

                                                                    <div className={styles.productListWidgetPrice}>
                                                                        <span>{photo.quantity} × <span><bdi><span>$</span>{photo.price}</bdi></span></span>
                                                                    </div>

                                                                </div>
                                                                <a className={styles.productListWidgetRemove}> X </a>
                                                            </div>
                                                        </li>
                                                    )
                                                    )}

                                                </ul>

                                                <div className={styles.productListWidgetTotal}>
                                                    <span className={styles.productListWidgetTotalTitle}>Subtotal:</span>
                                                    <span className={styles.amount}>
                                                        <bdi>
                                                            <span>$</span>{cartTotal()}
                                                        </bdi>
                                                    </span>
                                                </div>
                                            </>





                                        )
                                }

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