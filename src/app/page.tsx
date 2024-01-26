import { About } from './components/About'
import { Faq } from './components/Faq'
import { FeedBacks } from './components/FeedBacks'
import { Footer } from './components/Footer'
import Intro from './components/Header/Intro'
import { Payment } from './components/Payment'
import { Services } from './components/Servicess'

export default function Home() {
  return (
    <div>
      <div className="border-b-4 border-gb-25">
        <Intro />
      </div>
      <div className="bg-black w-full flex border-b-4 border-gb-25">
        <About />
      </div>
      <div className=" border-b-4 border-gb-25 ">
        <Services />
      </div>
      <div className="border-b-4 border-gb-25 ">
        <Payment />
      </div>
      <div className="border-b-4 border-gb-25">
        <FeedBacks />
      </div>
      <div className="border-b-4 border-gb-25">
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
// className="bg-[url('/02.png')] bg-cover bg-center bg-no-repeat bg-fixed"
