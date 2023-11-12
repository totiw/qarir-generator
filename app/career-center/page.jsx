import Banner from './_components/Banner'
import WhyCareer from './_components/WhyCareer'
import HiringSteps from './_components/HiringSteps'
import Alumni from './_components/Alumni'
import Portfolio from './_components/Portfolio'
import TalenRole from './_components/TalenRole'
import Form from './_components/Form'

import './style/career-center.css'

function CareerPage() {
  return (
    <main>
      <Banner />
      <WhyCareer />
      <HiringSteps />
      <Alumni />
      <Portfolio />
      <TalenRole />
      <Form />
    </main>
  )
}

export default CareerPage
