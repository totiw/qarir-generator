import Banner from './components/Banner'
import Programs from './components/Programs'
import Benefit from './components/Benefit'
import Classes from './components/Classes'
import Alumni from './components/Alumni'
import Contact from './components/Contact'
import Partnership from './components/Partnership'

import './style/homepage.css'

function HomePage() {
  return (
    <main className="">
      <Banner />
      <Programs />
      <Benefit />
      <Classes />
      <Alumni />
      <Contact />
      <Partnership />
    </main>
  )
}

export default HomePage
