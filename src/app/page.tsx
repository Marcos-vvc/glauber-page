import { About } from './components/About';
import { Faq } from './components/Faq';
import { FeedBacks } from './components/FeedBacks';
import { Footer } from './components/Footer';
import Intro from './components/Header/Intro';
import { Payment } from './components/Payment';
import { Services } from './components/Servicess';

export default function Home() {
  return (
    <div>
      <div className="border-b-2 border-gb-25" id="intro">
        <Intro />
      </div>

      <div
        className="bg-black w-full flex border-b-2 border-gb-25 bg-[url('/fundo.png')] bg-cover bg-center bg-no-repeat"
        id="about"
      >
        <About />
      </div>

      <div className="border-b-2 border-gb-25" id="avaliacao">
        <FeedBacks />
      </div>

      <div className=" border-b-2 border-gb-25 " id="services">
        <Services />
      </div>

      <div
        className="border-b-2 border-gb-25 bg-[url('/fundo.png')] bg-cover bg-center bg-no-repeat w-full"
        id="planos"
      >
        <Payment />
      </div>

      <div className="border-b-2 border-gb-25" id="faq">
        <Faq />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
