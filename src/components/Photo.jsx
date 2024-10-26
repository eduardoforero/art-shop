import styles from './Photo.module.css'

function Photo({ photo, addToCart }) {

    const { id, name, image, price } = photo

    return (
        <article className={styles.singlePhoto}>

            <img src={`/img/${image}.jpg`} className={styles.backPhoto} />

            <header>
                <h3>{name}</h3>
            </header>

            <p><span>${price}</span></p>
            <button type="button" onClick={() => addToCart(photo)}>
                Add to Cart
            </button>

        </article>
    )
}

export default Photo;