import styles from './Photo.module.css'

function Photo({ name, price, image }) {
    return (
        <article className={styles.singlePhoto}>

            <img src={`/img/${image}.jpg`} className={styles.backPhoto} />

                <header>
                    <h3>{name}</h3>
                </header>

                <p><span>${price}</span></p>
                <button type="button">
                    Add to Cart
                </button>

            
        </article>
    )
}

export default Photo;