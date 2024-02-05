import { Carousell } from '../Carousel'

export function FeedBacks() {
  return (
    <div className="flex flex-col p-4 lg:flex lg:flex-row lg:justify-center lg:gap-60">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="mt-10 font-bold text-4xl text-gb-25 text-center uppercase">
          Resultados
        </h2>
        <div className="lg:grid lg:grid-cols-3 grid grid-cols-2 gap-4 max-w-[1440px] m-auto h-[25rem] lg:w-[32rem] mt-10">
          <div className="bg-[url('/resu01.jpg')] bg-cover bg-center w-40 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>

          <div className="bg-[url('/resu02.jpg')] bg-cover bg-center w-40 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>

          <div className="bg-[url('/resu05.jpg')] bg-cover bg-center w-40 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>

          <div className="bg-[url('/resu06.jpg')] bg-cover bg-center w-40 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>

          <div className="bg-[url('/resu07.jpg')] bg-cover bg-center w-40 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>

          <div className="bg-[url('/resu08.jpg')] bg-cover bg-center w-40 h-48 hover:-translate-y-1 hover:scale-150 transition ease-in-out delay-150 duration-300"></div>
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
