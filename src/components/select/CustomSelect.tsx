'use client'
import { useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import style from './CustomSelect.module.css'
import Option from '@/components/select/Option'

type IconName = 'Star' | 'BeachAccess' | 'Storefront' | 'Business' | 'Waves' | 'HistoryEdu' | 'Apartment'

type CustomSelectProps = {
    onCategoryChange: (category: string) => void
}

const CustomSelect = ({ onCategoryChange }: CustomSelectProps) => {
    const categories: { name: string; icon: IconName }[] = [
        { name: 'Luxury', icon: 'Star' },
        { name: 'Resort', icon: 'BeachAccess' },
        { name: 'Boutique', icon: 'Storefront' },
        { name: 'Business', icon: 'Business' },
        { name: 'Beachfront', icon: 'Waves' },
        { name: 'Historic', icon: 'HistoryEdu' },
        { name: 'Contemporary', icon: 'Apartment' },
    ]

    const [selectedCategory, setSelectedCategory] = useState('CATEGORY')

    const handleChange = (event: SelectChangeEvent) => {
        const category = event.target.value
        setSelectedCategory(category)
        onCategoryChange(category)
    }

    return (
        <Box className={style.selectWrapper}>
            <FormControl fullWidth>
                <Select
                    labelId="select-category-label"
                    value={selectedCategory}
                    onChange={handleChange}
                    className={style.customSelect}
                    sx={{
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                        '& .MuiSvgIcon-root': { color: 'black' },
                        '& .MuiOutlinedInput-input': { p: 0 },
                        '& .MuiMenuItem-root': { padding: 0 },
                    }}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                width: '75vw',
                                overflowY: 'auto',
                                marginTop: 8,
                                backgroundColor: '#FDF8F5',
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
