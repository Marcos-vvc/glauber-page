import Image from 'next/image'
import logo from '../../../../public/Logo.png'
import { Instagram, Phone } from 'lucide-react'

export function Footer() {
  return (
    <div className="text-white flex flex-col items-center p-4 lg:w-[50rem] lg:flex lg:flex-row lg:items-center lg:justify-between lg:m-auto">
      <footer>
        <Image src={logo} alt="" className="w-36 h-36 text-white" />
      </footer>
      <div className="flex flex-col gap-4 justify-center items-center mt-8">
        <h4 className="font-bold text-2xl">Contatos</h4>
        <span className="text-white flex gap-2">
          <Instagram /> @euglauberaguiar
        </span>
        <span className="flex gap-2">
          <Phone /> (61)986343416
        </span>
      </div>
    </div>
  )
}
