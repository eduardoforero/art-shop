import { useMemo } from 'react'
import cartIcon from '/img/cart-icon.svg'
import searchIcon from '/img/search-icon.svg'
import userIcon from '/img/user-icon.svg'
import wishIcon from '/img/wish-icon.svg'
import styles from './Header.module.css'

function Header({ cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart }) {

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

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
                                    isEmpty ?
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

                                                                    <img
                                                                        src={`/img/${photo.image}.jpg`}
                                                                        className={`${styles.productListWidgetThumb} ${styles.productListWidgetThumbCover}`}
                                                                        alt=""
                                                                    />

                                                                </div>

                                                                <div className={styles.productListWidgetTitleCol}>

                                                                    <div className={styles.productListWidgetTitle}>
                                                                        {photo.name}
                                                                    </div>

                                                                    <div className={styles.productListWidgetPrice}>
                                                                        <span>


                                                                            <button type="button" className={styles.btnIncDecQuantity} onClick={() => decreaseQuantity(photo.id)}>
                                                                                -
                                                                            </button>
                                                                            {photo.quantity}
                                                                            <button type="button" className={styles.btnIncDecQuantity} onClick={() => increaseQuantity(photo.id)}>
                                                                                +
                                                                            </button>

                                                                            <span> X <span>$</span>{photo.price}</span>
                                                                        </span>
                                                                    </div>

                                                                </div>
                                                                <a onClick={() => removeFromCart(photo.id)} className={styles.productListWidgetRemove}> X </a>
                                                            </div>
                                                        </li>
                                                    )
                                                    )}

                                                </ul>

                                                <div className={styles.productListWidgetTotal}>
                                                    <span className={styles.productListWidgetTotalTitle}>Subtotal:</span>
                                                    <span className={styles.amount}>
                                                        
                                                        <span>$</span>{cartTotal}
                                                        
                                                    </span>
                                                </div>
                                            </>

                                        )
                                }

                                <div className={styles.productListWidgetButtons}>
                                    <a onClick={clearCart} className={styles.button}>
                                        Empty Cart
                                    </a>
                                    <a className={styles.btnDisabled}>
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