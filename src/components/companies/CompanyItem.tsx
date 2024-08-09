import Link from 'next/link'
import Image from 'next/image'
import {ICompanyItem} from '@/types/ICompanyItem'
import style from './CompanyItem.module.css'

const CompanyItem = ({href, image, height}: ICompanyItem) => {
    return (
        <Link href={href}>
            <div className={style.item}>
                <Image
                    src={image}
                    height={height}
                    alt="Company"
                />
            </div>
        </Link>
    )
}

export default CompanyItem
