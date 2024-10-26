import { useState, useEffect } from 'react'
import Header from './components/Header'
import Photo from './components/Photo'
import { db } from './data/db'
import styles from './App.module.css'


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(db)
  }, [])

  return (
    <>
      <Header />

      <section className={styles.photoList}>
        <div className={styles.listGrid}>
          {data.map(photo => 
            (
              <Photo key={photo.id} name={photo.name} price={photo.price} image={photo.image} />
            )
          )}
        </div>
      </section>
    </>
  )
}

export default App;
