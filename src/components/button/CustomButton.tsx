import {Button} from '@mui/material'
import {IButton} from '@/types/IButton'
import style from './CustomButton.module.css'

const CustomButton = ({name, onClick}: IButton) => {
    return (
        <Button className={style.button} name={name}/>
    )
}

export default CustomButton
