import Link from 'next/link'
import Image from 'next/image'
import {ICompanyItem} from '@/types/ICompanyItem'

const CompanyItem = ({href, image}: ICompanyItem) => {
    return (
        <Link href={href}>
            <Image src={image} alt="Company" layout="responsive"/>
        </Link>
    )
}

export default CompanyItem
