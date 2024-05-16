import { Dumbbell, GraduationCap } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col m-auto h-full mb-6">
      <div className="flex flex-col items-center text-center text-lg text-white space-y-0.5 mt-6 m-auto">
        <h2 className="font-figtree font-bold text-4xl text-gb-25 uppercase">
          Minha História
        </h2>
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center text-justify max-w-[50rem] p-4">
          <p className="">
            Olá, eu sou Glauber Aguiar, um apaixonado por fitness e saúde. Com
            mais de 8 anos de experiência como personal trainer, estou aqui para
            ajudar você a atingir seus objetivos na área da saúde e estética de
            forma segura e eficaz. <br />
            Minha missão é combater o sedentarismo no mundo e capacitar você a
            alcançar a melhor versão de si por meio de treinamento físico
            personalizado. Meu compromisso é oferecer resultados reais sem
            falsas promessas.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row max-w-[1440px] w-full lg:m-auto">
        <div className="flex mt-6 items-center w-full lg:flexkm lg:flex-row">
          <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-center flex flex-col items-center text-center lg:gap-64 w-full">
            <div className="lg:flex-col lg:items-center lg:justify-center lg:flex flex flex-col items-center">
              <div className="flex flex-row gap-6 items-center">
                <Dumbbell className="w-8 h-7 text-gb-25 mt-4" />
                <h2 className="font-tektur uppercase text-gb-25 mt-3 text-3xl">
                  Experiência
                </h2>
              </div>

              <p className="mt-6 text-white w-80">
                08 anos como Personal Trainer <br /> + 300 Mentorados 100%
                online (Nacional e internacional){" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center items-center w-full">
          <div className="lg:flex lg:flex-row lg:items-center lg:justify-center flex flex-col items-center text-center lg:gap-80 w-full">
            <div className="lg:flex-col lg:items-center lg:justify-center lg:flex flex flex-col items-center  mt-8">
              <div className="flex flex-row gap-6 items-center ">
                <GraduationCap className="w-8 h-8 text-gb-25 mt-4" />
                <h2 className="font-tektur uppercase text-gb-25 mt-3 text-3xl">
                  Formação
                </h2>
              </div>

              <p className="mt-6 text-white w-80">
                08 anos como Personal Trainer <br /> + 300 Mentorados 100%
                online (Nacional e internacional)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
