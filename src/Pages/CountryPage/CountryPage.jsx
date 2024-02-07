import React, { useEffect, useState } from 'react'
import style from './CountryPage.module.scss'
import { AsideContainer } from '../../Components/AsideContainer/AsideContainer'
import { AsideContent } from '../../Components/AsideContent/AsideContent'
import { NavLink, useParams } from 'react-router-dom'
import { NoInfoCard } from '../../Components/NoInfoCard/NoInfoCard'
import { CountrySelect } from '../../Components/CountrySelect/CountrySelect'

export const CountryPage = () => {

  const { country } = new useParams()
  const [cities, setCities] = useState()

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}`)
      .then(res => res.json())
      .then(data => setCities(data))

    console.log(cities);

  }, [])

  return (
    <>

      <CountrySelect />

      <AsideContainer>

        <main className={style.cities}>
          {cities ?
            <>
              {cities.cities.map((city, i) => {
                return (
                  <NavLink to={`/countries/${country}/${city.slug}`} key={i}>
                    <NoInfoCard img={`../../src/assets/images/${city.CityImage.city_image_filename}`} title={city.name} />
                  </NavLink>
                )
              })}
            </>
            :
            <>{country}</>
          }
        </main>

        <AsideContent>

        </AsideContent>

      </AsideContainer>

    </>
  )
}
