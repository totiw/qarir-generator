import Banner from './components/Banner'
import Programs from './components/Programs'
import Benefit from './components/Benefit'
import Classes from './components/Classes'
import Alumni from './components/Alumni'

import './style/homepage.css'

function HomePage() {
  return (
    <main className="">
      <Banner />
      <Programs />
      <Benefit />
      <Classes />
      <Alumni />
    </main>
  )
}

export default HomePage
