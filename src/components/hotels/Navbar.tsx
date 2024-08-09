import { Box, Button } from '@mui/material'
import style from './Navbar.module.css'
import Arrow from '@/components/hotels/Arrow'

interface NavbarProps {
    category: string
}

const Navbar = ({category}: NavbarProps) => {
    return (
        <nav className={style.navbar}>
            <h2 className={style.category}>{category.toUpperCase()}</h2>
            <Box className={style.buttonsWrapper}>
                <Button className={style.button}>SEE ALL</Button>
                <Box className={style.arrows}>
                    <Arrow direction="left" />
                    <Arrow direction="right" />
                </Box>
            </Box>
        </nav>
    )
}

export default Navbar
