import Image from 'next/image'
import about from '../../../../../public/About.jpg'

export default function Intro() {
  return (
    <div className="flex flex-col text-white justify-center items-center uppercase lg:grid lg:grid-cols-2  p-8 max-w-[80rem]">
      <div className="mt-10 flex flex-col justify-center items-center w-full lg:flex lg:flex-col">
        <h2 className="flex font-figtree font-bold text-7xl w-full">
          Glauber Aguiar
        </h2>
        <span className="bg-orange-500 w-72 text-center rounded-tr-lg rounded-bl-lg">
          Personal Trainer
        </span>
        <p className="flex text-xs mt-2">Sua melhor versão começa aqui!</p>
      </div>
      <div className="flex">
        <Image
          src={about}
          alt=""
          className="flex w-72 h-72 rounded border-white border-2 solid"
        />
      </div>
    </div>
  )
}
