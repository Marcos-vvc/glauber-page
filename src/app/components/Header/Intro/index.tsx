import Image from 'next/image'
import glauber from '../../../../../public/Glauber.png'

export default function Intro() {
  return (
    <div className="flex flex-col text-white justify-center items-center uppercase lg:flex lg:flex-row p-8  lg:items-center lg:m-auto lg:max-w-[70rem] lg:gap-96 lg:mt-10">
      <div className="mt-10 flex flex-col justify-center items-center lg:flex lg:flex-col lg:m-auto lg:justify-center">
        <h2 className="font-bold text-7xl text-center">
          Glauber <br /> Aguiar
        </h2>
        <span className="bg-orange-500 w-72 text-center rounded-tr-lg rounded-bl-lg">
          Personal Trainer
        </span>
        <p className="flex text-xs mt-2">Sua melhor versão começa aqui!</p>
      </div>
      <Image src={glauber} alt="" className="flex w-[25rem] h-[30rem]" />
    </div>
  )
}
