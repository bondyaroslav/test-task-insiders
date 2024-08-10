'use client'
import React from 'react'
import { Box } from '@mui/material'
import style from './Carousel.module.css'

interface CarouselProps {
    children: React.ReactNode
    offset: number
    itemsPerPage: number
}

const Carousel = ({ children, offset, itemsPerPage }: CarouselProps) => {
    return (
        <Box className={style.wrapper}>
            <Box className={style.mainContainer}>
                <Box className={style.window}>
                    <Box
                        className={style.allPagesContainer}
                        style={{
                            transform: `translateX(${offset}px)`,
                            transition: 'transform 0.3s ease-out',
                            display: 'flex',
                        }}
                    >
                        {React.Children.map(children, (child) => (
                            <Box
                                className={style.childrenWrapper}
                                style={{
                                    width: 250
                                }}
                            >
                                {child}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Carousel
