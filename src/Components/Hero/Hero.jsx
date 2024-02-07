import React from 'react'
import { Carousel } from './Carousel/Carousel'

export const Hero = ({title}) => {
    return (
        <>
            <Carousel>
                <h1>
                    {title}
                </h1>
            </Carousel>
        </>
    )
}
