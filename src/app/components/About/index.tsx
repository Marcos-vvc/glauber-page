import Image from 'next/image'
import about from '../../../../public/About.jpg'
import xp from '../../../../public/Intro.png'
import treino from '../../../../public/formacao.png'

export function About() {
  return (
    <div className="flex flex-col m-auto">
      <div className="flex flex-col items-center mt-6 lg:flex lg:flex-row lg:items-center lg:justify-center px-4 shadow-lg  shadow-white">
        <Image
          src={about}
          alt=""
          className="w-64 h-72 rounded-3xl border-gb-25 border-4 solid"
        />
        <div className="flex flex-col items-center text-center w-[60rem] text-lg text-white space-y-0.5 mt-6">
          <div className="lg:flex lg:flex-row lg:items-center lg:gap-12">
            <p className="w-80 rounded border-white border-2 solid shadow-lg shadow-white h-72">
              <h2 className="uppercase bg-gb-25">Quem sou eu?</h2>
              Olá, eu sou Glauber Aguiar, um apaixonado por fitness e saúde. Com
              mais de 8 anos de experiência como personal trainer, estou aqui
              para ajudar você a atingir seus objetivos na área da saúde e
              estética de forma segura e eficaz.
            </p>
            <p className="w-80 rounded border-white border-2 solid shadow-lg shadow-white">
              <h2 className="uppercase bg-gb-25">Minha missão</h2>
              Minha missão é combater o sedentarismo no mundo e capacitar você a
              alcançar a melhor versão de si por meio de treinamento físico
              personalizado. Meu compromisso é oferecer resultados reais sem
              falsas promessas.
            </p>
          </div>
        </div>
      </div>

      <Image
        src={xp}
        alt=""
        className="flex w-72 h-72 m-auto rounded-t-lg border-gb-25 border-4 solid"
      />
      {/* <div className="bg-[url('/Intro.png')] bg-cover h-80 bg-no-repeat"></div> */}
      <div className="flex mt-6 items-center w-full shadow-lg  shadow-white pb-6 pt-6 bg-black">
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-center flex flex-col items-center text-center lg:gap-64 w-full">
          <div className="lg:flex-col lg:items-center lg:justify-center lg:flex rounded border-white border-2 solid h-60 lg:w-96 shadow-lg shadow-white">
            <h2 className="font-tektur uppercase text-white mt-3 text-3xl">
              Experiência
            </h2>
            <h4 className="uppercase text-white bg-gb-25 -rotate-6">
              Profissional
            </h4>

            <p className="mt-6 text-white w-80">
              08 anos como Personal Trainer <br /> + 300 Mentorados 100% online
              (Nacional e internacional){' '}
            </p>
          </div>
        </div>
      </div>

      <Image
        src={treino}
        alt=""
        className="w-64 h-72 rounded-t-lg border-gb-25 border-4 solid"
      />
      <div className="flex flex-col text-center mt-6 items-center w-full bg-black">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-center flex flex-col items-center text-center lg:gap-80 w-full">
          <div className="lg:flex-col lg:items-center lg:justify-center lg:flex rounded border-white border-2 solid h-60 lg:w-96 shadow-lg shadow-white">
            <h2 className="font-tektur uppercase text-white mt-3 text-3xl">
              Formaçäo
            </h2>
            <h4 className="uppercase text-white bg-gb-25 -rotate-6">
              Academia
            </h4>

            <p className="mt-6 text-white w-80">
              08 anos como Personal Trainer <br /> + 300 Mentorados 100% online
              (Nacional e internacional)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
