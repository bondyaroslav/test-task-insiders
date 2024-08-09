'use client'
import React, { Children, cloneElement, useEffect, useState } from 'react'
import style from './Carousel.module.css'

const PAGE_WIDTH = 20 * window.innerWidth

const Carousel = ({ children, offset }: any) => {
    const [pages, setPages] = useState([])

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [children])

    return (
        <div className={style.wrapper}>
            <div className={style.mainContainer}>
                <div className={style.window}>
                    <div className={style.allPagesContainer}
                         style={{
                             transform: `translateX(${offset}px)`
                         }}
                    >
                        {pages}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
