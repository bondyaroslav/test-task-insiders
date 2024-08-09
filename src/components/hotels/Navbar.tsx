import { Box, Button } from '@mui/material'
import style from './Navbar.module.css'
import Arrow from '@/components/hotels/Arrow'

interface NavbarProps {
    categoryName: string
    onLeftClick: () => void
    onRightClick: () => void
}

const Navbar = ({ categoryName, onLeftClick, onRightClick }: NavbarProps) => {
    return (
        <nav className={style.navbar}>
            <h2 className={style.category}>{categoryName.toUpperCase()}</h2>
            <Box className={style.buttonsWrapper}>
                <Button className={style.button}>SEE ALL</Button>
                <Box className={style.arrows}>
                    <Arrow direction='left' onClick={onLeftClick} />
                    <Arrow direction='right' onClick={onRightClick} />
                </Box>
            </Box>
        </nav>
    )
}

export default Navbar
