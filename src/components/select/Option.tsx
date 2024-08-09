import React from 'react'
import style from './Option.module.css'
import StarIcon from '@mui/icons-material/Star'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import StorefrontIcon from '@mui/icons-material/Storefront'
import BusinessIcon from '@mui/icons-material/Business'
import WavesIcon from '@mui/icons-material/Waves'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import ApartmentIcon from '@mui/icons-material/Apartment'

const iconMap = {
    Star: StarIcon,
    BeachAccess: BeachAccessIcon,
    Storefront: StorefrontIcon,
    Business: BusinessIcon,
    Waves: WavesIcon,
    HistoryEdu: HistoryEduIcon,
    Apartment: ApartmentIcon,
}

interface OptionProps {
    value: string
    icon: keyof typeof iconMap
}

const Option = ({ value, icon }: OptionProps) => {
    const IconComponent = iconMap[icon]

    return (
        <div className={style.option}>
            <IconComponent className={style.icon} />
            <p className={style.value}>{value}</p>
        </div>
    )
}

export default Option
