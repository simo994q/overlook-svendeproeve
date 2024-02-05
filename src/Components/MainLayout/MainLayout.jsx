import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import style from './MainLayout.module.scss'

export const MainLayout = () => {
    return (
        <>
            <div className={style.wrapper}>
                <Navbar />
                <main className={style.mainWrapper}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
