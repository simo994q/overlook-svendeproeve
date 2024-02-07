import React, { useEffect, useState } from 'react'
import style from './FrontPage.module.scss'
import { InfoCard } from '../../Components/InfoCard/InfoCard'

export const FrontPage = () => {
  const [newsData, setNewsData] = useState()

  useEffect(() => {
    fetch('http://localhost:4000/news')
      .then((res) => res.json())
      .then((data) => {
        const lastThree = data.slice(1).slice(-3)
        setNewsData(lastThree)
      })

      
  }, [])

  return (
    <>
      <div className={style.wrapper}>

        <h2>Sidste nyt</h2>

        {newsData ?
          <>
            <div className={style.cardGrid}>
              {newsData.map((item, i) => {
                return (
                  <InfoCard key={i} img={`../../src/assets/images/${item.image.filename}`} title={item.title} desc={item.teaser} />
                )
              })}
            </div>
          </>
          :
          <></>
        }

        <h2>Se vores udvalg af værelser</h2>

      </div>
    </>
  )
}
