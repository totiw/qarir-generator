import Banner from './_components/Banner'
import WhyCareer from './_components/WhyCareer'
import HiringSteps from './_components/HiringSteps'
import Alumni from './_components/Alumni'

import './style/career-center.css'

function CareerPage() {
    return (
        <main>
           <Banner />
           <WhyCareer />
           <HiringSteps />
           <Alumni/>
        </main>
    )
}

export default CareerPage