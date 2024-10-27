import { useState, useEffect } from 'react'
import Header from './components/Header'
import Photo from './components/Photo'
import { db } from './data/db'
import styles from './App.module.css'


function App() {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [data, setData] = useState([])
  const [cart, setCart] = useState(initialCart)

  const MIN_ITEMS = 1
  const MAX_ITEMS = 5

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    setData(db)
  }, [])

  function addToCart(item) {

    const itemExist = cart.findIndex(photo => photo.id === item.id)

    if (itemExist >= 0) {

      if (cart[itemExist].quantity >= MAX_ITEMS) return

      const updatedCart = [...cart]
      updatedCart[itemExist].quantity++
      setCart(updatedCart)

    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(photo => photo.id !== id))
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function clearCart() {
    setCart([])

  }

  function increaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
      />

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
