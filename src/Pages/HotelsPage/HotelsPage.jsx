import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import style from './HotelsPage.module.scss'
import { AsideContainer } from '../../Components/AsideContainer/AsideContainer'
import { AsideContent } from '../../Components/AsideContent/AsideContent'
import { CountrySelect } from '../../Components/CountrySelect/CountrySelect'
import { NoInfoCard } from '../../Components/NoInfoCard/NoInfoCard'

export const HotelsPage = () => {

    const { country, city } = new useParams()
    console.log(city);

    const [hotels, setHotels] = useState()
    const [cities, setCities] = useState()
    console.log(cities);

    useEffect(() => {

        fetch(`http://localhost:4000/destinations/${country}/${city}`)
            .then(res => res.json())
            .then(data => setHotels(data))

        console.log(hotels);

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
                    {hotels ?
                        <>
                            {hotels.cities[0].hotels.map((hotel, i) => {
                                return (
                                    <NavLink to={`/countries/${country}/${city}`} key={i}>
                                        <NoInfoCard img={`../../src/assets/images/${hotel.HotelImage.hotel_image_filename}`} title={hotel.title} />
                                    </NavLink>
                                )
                            })}
                        </>
                        :
                        <>???</>
                    }
                </main>


                <AsideContent>

                    {cities ?
                        <>
                            andre byer i danmark
                            <ul>
                                {cities.cities.map((city, i) => {
                                    return (
                                        <li key={i}><NavLink to={`/countries/${country}/${city}/${city.slug}`}>{city.name}</NavLink></li>
                                    )
                                })}
                            </ul>
                        </>
                        :
                        <></>
                }

                </AsideContent>

            </AsideContainer>
        </>
    )
}
