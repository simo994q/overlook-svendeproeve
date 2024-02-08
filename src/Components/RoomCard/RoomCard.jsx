import React, { useState } from 'react'
import style from './RoomCard.module.scss'
import { Button } from '../Button/Button'

export const RoomCard = ({ img, title, space, persons, description, price, onClick }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={style.fullWrapper} >

                <figure className={style.infoWrapper}>
                    <img src={`../../../src/assets/images/${img}`} />
                    <figcaption>
                        <h2>{title}</h2>
                        <p>{space}. Plads til {persons} personer.</p>
                        <p>{description}</p>
                        <h3>Fra {price} DKK</h3>
                    </figcaption>
                </figure>

                <article className={style.dropdown} style={{ display: open ? 'flex' : 'none' }}>
                    <h3>Værelset er udstyret med:</h3>
                    <ul>

                    </ul>
                    <div className={style.bookTypes}>
                        <figure className={style.bookInfo}>
                            <h2>NORMAL pris inkl. morgenmad</h2>
                            <p>Kan ikke ændres eller afbestilles</p>
                            <div className={style.book}>
                                <h2> DKK/nat</h2>
                                <Button onClick={onClick}>Book</Button>
                            </div>
                        </figure>
                        <figure className={style.bookInfo}>
                            <h2>NORMAL pris inkl. morgenmad</h2>
                            <p>Kan ikke ændres eller afbestilles</p>
                            <div className={style.book}>
                                <h2> DKK/nat</h2>
                                <Button onClick={onClick}>Book</Button>
                            </div>
                        </figure>
                    </div>
                </article>
                <button onClick={() => setOpen(!open)}><img style={{ rotate: open ? '180deg' : '0deg' }} src={`../../../src/assets/images/arrow.svg`} /></button>
            </div>
        </>
    )
}
