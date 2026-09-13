
import { Suspense, useState } from 'react'
import './App.css'
import Bannar from './componats/Bannar'
import Footer from './componats/Footer'
import Navbar from './componats/Navbar'
import PrentCards from './componats/cards/PrentCards'
import type { InCardType } from './Type/InCardsType'



const cardsfetch = async (): Promise<InCardType[]> => {

  const res = await fetch('/data.json');
  const data = await res.json()
  return data ;

}
function App() {
  
  
    
  // const cardsPromis = cardsfetch();
  const [cardsPromis] = useState(()=>cardsfetch())

  return (
    <>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <Suspense fallback={<p>loding.....</p>}>
        <PrentCards cardsPromis={cardsPromis}></PrentCards>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
