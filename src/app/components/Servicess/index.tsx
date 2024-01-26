'use client'
import Image from 'next/image'
import hipertrofia from '../../../../public/levantador.svg'
import balança from '../../../../public/balança.svg'
import telefone from '../../../../public/smartphone.svg'
import mulher from '../../../../public/mulher.svg'
import casal from '../../../../public/casal.svg'
import funcional from '../../../../public/pessoa.svg'
import lesao from '../../../../public/lesao.svg'
import exercicio from '../../../../public/exercicio.svg'

export function Services() {
  return (
    <div className="flex flex-col h-full p-8">
      <h2 className="text-gb-25 text-4xl text-center font-bold mt-4 mb-4">
        Serviços
      </h2>
      <div className="lg:flex lg:flex-row lg:gap-8 lg:justify-center lg:flex-wrap lg:w-[70rem] lg:m-auto flex flex-col m-auto gap-6">
        <div className="flex flex-col items-center justify-center rounded-3xl h-52 w-56 bg-gb-30 gap-4 text-white shadow-lg shadow-gb-100">
          <Image
            src={hipertrofia}
            alt=""
            className="h-14 w-14 hover:-translate-y-1.5 duration-100"
          />
          <span>
            Ganho de massa <br /> Hipertrofia
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl h-52 w-56 bg-gb-30 gap-4 text-white shadow-lg shadow-gb-100">
          <Image
            src={balança}
            alt=""
            className="h-14 w-14 hover:-translate-y-1.5 duration-100"
          />
          <span>Emagrecimento</span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl h-52 w-56 bg-gb-30 gap-4 text-white shadow-lg shadow-gb-100">
          <Image
            src={telefone}
            alt=""
            className="h-14 w-14 hover:-translate-y-1.5 duration-100"
          />
          <span>Mentoria online</span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl h-52 w-56 bg-gb-30 gap-4 text-white shadow-lg shadow-gb-100">
          <Image
            src={mulher}
            alt=""
            className="h-14 w-14 hover:-translate-y-1.5 duration-100"
          />
          <span>Treinamento feminino</span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl h-52 w-56 bg-gb-30 gap-4 text-white shadow-lg shadow-gb-100">
          <Image
            src={casal}
            alt=""
            className="h-14 w-14 hover:-translate-y-1.5 duration-100"
          />
          <span>Melhor idade</span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl h-52 w-56 bg-gb-30 gap-4 text-white shadow-lg shadow-gb-100">
          <Image
            src={exercicio}
            alt=""
            className="h-14 w-14 hover:-translate-y-1.5 duration-100"
          />
          <span>TAF</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl h-52 w-56 bg-gb-30 gap-4 text-white shadow-lg shadow-gb-100">
          <Image
            src={funcional}
            alt=""
            className="h-14 w-14 hover:-translate-y-1.5 duration-100"
          />
          <span>Treinamento Funcional</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl h-52 w-56 bg-gb-30 gap-4 text-white shadow-lg shadow-gb-100">
          <Image
            src={lesao}
            alt=""
            className="h-14 w-14 hover:-translate-y-1.5 duration-100"
          />
          <span>
            Fortalecimento e <br /> prevençao de lesões
          </span>
        </div>
      </div>
    </div>
  )
}
