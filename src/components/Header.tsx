import style from './Header.module.css'
import {Button} from '@mui/material'

const Header = () => {
    return (
        <header className={style.headerWrapper}>
            <div className={style.header}>
                <div className={style.logoWrapper}>
                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.4839 18.3245C9.19534 14.6677 10.5447 10.6023 13.7641 8.44189C16.9836 6.28144 21.257 6.57353 24.1525 9.15195C27.048 11.7304 27.8317 15.9415 26.0576 19.389C24.2835 22.8364 20.4012 24.6463 16.6201 23.7887"
                            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M17.5161 12.6755C18.8047 16.3323 17.4553 20.3977 14.2359 22.5581C11.0164 24.7186 6.74303 24.4265 3.8475 21.8481C0.951975 19.2696 0.168289 15.0585 1.94242 11.611C3.71655 8.16356 7.59878 6.35366 11.3799 7.21129"
                            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20.5 7L16 3.57143L17.8 1H23.2L25 3.57143L20.5 7Z"
                              stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className={style.logoText}>GREATESTDAY</p>
                </div>
                <div className={style.buttonsWrapper}>
                    <Button sx={{
                        width: 130,
                        height: 45,
                        backgroundColor: "#000000",
                        color: "#FFFFFF",
                        textTransform: 'none',
                        fontWeight: 700,
                        borderRadius: 1.2
                    }}>
                        Our wedding
                    </Button>

                    <Button sx={{
                        width: 145,
                        height: 45,
                        backgroundColor: "#FAEBE3",
                        color: "#000000",
                        textTransform: 'none',
                        fontWeight: 700,
                        marginLeft: 3
                    }}>
                        Sign out
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header