import React, { useState } from 'react'
import style from './RoomCard.module.scss'

export const RoomCard = ({ img, title, space, persons, description, price }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={style.fullWrapper}>

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
                    <div>
                        <figure>

                        </figure>
                        <figure>

                        </figure>
                    </div>
                </article>
                <button onClick={() => setOpen(!open)}><img style={{rotate: open ? '180deg' : '0deg'}} src={`../../../src/assets/images/arrow.svg`} /></button>
            </div>
        </>
    )
}
