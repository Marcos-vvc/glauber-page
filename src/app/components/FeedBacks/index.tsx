import Image from 'next/image'
import resu01 from '../../../../public/resu01.jpg'
import resu02 from '../../../../public/resu02.jpg'
import resu05 from '../../../../public/resu05.jpg'
import resu06 from '../../../../public/resu06.jpg'
import resu07 from '../../../../public/resu07.jpg'
import resu08 from '../../../../public/resu08.jpg'
import { Carousell } from '../Carousel'

export function FeedBacks() {
  return (
    <div className="flex flex-col p-4 lg:flex lg:flex-row lg:justify-center lg:gap-60">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="mt-10 font-bold text-4xl text-gb-25 text-center uppercase">
          Resultados
        </h2>
        <div className="lg:grid lg:grid-cols-3 grid grid-cols-2 gap-4 max-w-[1440px] m-auto h-[25rem] lg:w-[32rem] mt-10">
          <Image
            src={resu01}
            alt=""
            className="w-48 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu02}
            alt=""
            className="w-48 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu05}
            alt=""
            className="w-48 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu06}
            alt=""
            className="w-48 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu07}
            alt=""
            className="w-48 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu08}
            alt=""
            className="w-48 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[32rem]">
        <h2 className="lg:mt-10 mt-72 font-bold text-4xl text-gb-25 text-center uppercase">
          Feedbacks
        </h2>
        <Carousell />
      </div>
    </div>
  )
}
