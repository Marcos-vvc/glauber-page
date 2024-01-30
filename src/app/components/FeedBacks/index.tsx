import Image from 'next/image'
import resu01 from '../../../../public/resu01.jpg'
import resu02 from '../../../../public/resu02.jpg'
import { Carousell } from '../Carousel'

export function FeedBacks() {
  return (
    <div className="flex flex-col p-4 lg:flex lg:flex-row lg:justify-center lg:gap-60">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="mt-10 font-bold text-4xl text-gb-25 text-center">
          Resultados
        </h2>
        <div className="grid grid-cols-3 gap-4 max-w-[1440px] m-auto h-[25rem] lg:w-[32rem] mt-4">
          <Image
            src={resu01}
            alt=""
            className="w-40 h-40 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu02}
            alt=""
            className="w-40 h-40 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu02}
            alt=""
            className="w-40 h-40 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu01}
            alt=""
            className="w-40 h-40 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu01}
            alt=""
            className="w-40 h-40 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
          />
          <Image
            src={resu01}
            alt=""
            className="w-40 h-40 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-[32rem]">
        <h2 className="mt-10 font-bold text-4xl text-gb-25 text-center">
          Feedbacks
        </h2>
        <Carousell />
      </div>
    </div>
  )
}
