import Banner from './_components/Banner'
import Programs from './_components/Programs'
import Benefit from './_components/Benefit'
import Classes from './_components/Classes'
import Alumni from './career-center/_components/Alumni'
import Contact from './_components/Contact'
import Partnership from './_components/Partnership'
import Article from './_components/Article'
import Event from './_components/Event'

import './style/homepage.css'

function HomePage() {
  return (
    <main>
      <Banner />
      <Programs />
      <Benefit />
      <Classes />
      <Alumni />
      <Contact />
      <Partnership />
      <Article />
      <Event />
    </main>
  )
}

export default HomePage
