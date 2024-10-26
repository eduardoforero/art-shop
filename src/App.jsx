import { useState, useEffect } from 'react'
import Header from './components/Header'
import Photo from './components/Photo'
import { db } from './data/db'
import styles from './App.module.css'


function App() {

  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setData(db)
  }, [])

  function addToCart(item) {

    const itemExist = cart.findIndex(photo => photo.id === item.id)

    if (itemExist >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExist].quantity++
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  return (
    <>
      <Header />

      <section className={styles.photoList}>
        <div className={styles.listGrid}>
          {data.map(photo =>
          (
            <Photo key={photo.id} photo={photo} addToCart={addToCart} />
          )
          )}
        </div>
      </section>
    </>
  )
}

export default App;
