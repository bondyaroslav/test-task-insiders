import style from './Arrow.module.css'

interface ArrowProps {
    direction: 'left' | 'right'
    onClick?: () => void
}

const Arrow = ({ direction, onClick }: ArrowProps) => {
    const transform = direction === 'left' ? 'rotate(0deg)' : 'rotate(180deg)'

    return (
        <svg
            className={style.arrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform }}
            onClick={onClick}
        >
            <rect width="24" height="24" rx="12" fill="black" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 12L14 17V7L7 12Z"
                fill="#FAEBE3"
            />
        </svg>
    )
}

export default Arrow
