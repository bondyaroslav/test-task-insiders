import svnkst from '../../assets/companies/svnkst.png'
import louis from '../../assets/companies/louis.png'
import marimeko from '../../assets/companies/marimeko.png'
import yasuragi from '../../assets/companies/yasuragi.png'
import global from '../../assets/companies/global.png'
import style from './Companies.module.css'
import CompanyItem from '@/components/companies/CompanyItem'

const Companies = () => {
    return (
        <div className={style.companiesWrapper}>
            <CompanyItem href="https://www.svenskttenn.com/us/en/" image={svnkst}/>
            <CompanyItem href="https://www.yasuragi.se/en/" image={yasuragi}/>
            <CompanyItem href="https://www2.marimekko.com/us_en" image={marimeko}/>
            <CompanyItem href="https://www.louispoulsen.com/en-us/private" image={louis}/>
            <CompanyItem href="/" image={global}/>
        </div>
    )
}

export default Companies
