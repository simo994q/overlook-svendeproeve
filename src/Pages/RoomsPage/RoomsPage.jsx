import React, { useContext } from 'react'
import style from './RoomsPage.module.scss'
import { CountrySelect } from '../../Components/CountrySelect/CountrySelect'
import { AsideContainer } from '../../Components/AsideContainer/AsideContainer'
import { AsideContent } from '../../Components/AsideContent/AsideContent'
import { NavLink, useParams, } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RoomCard } from '../../Components/RoomCard/RoomCard'
import { RoomContext } from '../../Context/RoomContextProvider'

export const RoomsPage = () => {

  const { country, city, hotel } = new useParams()
  const { room, setRoom } = useContext(RoomContext)

  const [rooms, setRooms] = useState()

  useEffect(() => {
    fetch(`http://localhost:4000/destinations/${country}/${city}/${hotel}`)
      .then(res => res.json())
      .then(data => { setRooms(data.cities[0].hotels[0].rooms), console.log(data) })
  }, [])

  const goBook = (selectedRoom) => {
    setRoom(selectedRoom)
    window.location.href = '/reservations'
  }

  return (
    <>

      <CountrySelect />

      <AsideContainer>
        <main className={style.rooms}>
          {rooms ?
            <>
              {rooms.map((room, i) => {
                console.log(room.area)
                return (
                  <RoomCard onClick={() => goBook(room)} key={i} img={room.images[0].filename} title={room.title} space={room.area} persons={room.num_persons} description={room.description} price={room.day_price_normal} />
                )
              })}
            </>
            :
            <>???</>
          }
        </main>

        <AsideContent>

        </AsideContent>

      </AsideContainer>

    </>
  )
}
