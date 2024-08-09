'use client'
import { useState } from 'react'
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import style from './CustomSelect.module.css'
import Option from '@/components/select/Option'

type IconName = 'Star' | 'BeachAccess' | 'Storefront' | 'Business' | 'Waves' | 'HistoryEdu' | 'Apartment'

const CustomSelect = () => {
    const categories: { name: string; icon: IconName }[] = [
        { name: 'Luxury', icon: 'Star' },
        { name: 'Resort', icon: 'BeachAccess' },
        { name: 'Boutique', icon: 'Storefront' },
        { name: 'Business', icon: 'Business' },
        { name: 'Beachfront', icon: 'Waves' },
        { name: 'Historic', icon: 'HistoryEdu' },
        { name: 'Contemporary', icon: 'Apartment' },
    ]

    const [selectedCategory, setSelectedCategory] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedCategory(event.target.value)
    }

    return (
        <Box className={style.selectWrapper}>
            <FormControl fullWidth>
                <Select
                    labelId="select-category-label"
                    value={selectedCategory}
                    onChange={handleChange}
                    className={style.customSelect}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                width: '75vw',
                                overflowY: 'auto',
                                marginTop: 8,
                                backgroundColor: '#FDF8F5'
                            },
                        },
                        disableScrollLock: true,
                    }}
                >
                    {categories.map((category, index) => (
                        <MenuItem
                            className={style.menuItem}
                            key={index}
                            value={category.name}

                        >
                            <Option
                                icon={category.icon}
                                value={category.name}
                            />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default CustomSelect
