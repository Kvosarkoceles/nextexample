import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import './layout.css'
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
})

export const Layout = ({ children, title, description, refs, posicion  }) => {
    return (
        <>
            <Navbar refs={refs}  posicion={posicion}  />
            <main className={josefinSans.className + " " + "mainApp__container"}>{children}</main>
            <Footer />
        </>
    )
}

Layout.defaultProps = {
    title: "T7 International Group",
    description: "T7 International Group Website",
};

