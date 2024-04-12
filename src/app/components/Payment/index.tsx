// import { Star } from 'lucide-react'
import { CardItem } from './Card'
import { Button } from '../Button'
import {
  CardCustoBeneficio,
  CardMensal,
  CardSemestral,
  CardTrimestral,
} from './textos'

export function Payment() {
  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="mt-10 font-bold text-4xl text-gb-25 uppercase">
        Planos de treinos
      </h2>

      <div className="flex flex-col items-center justify-center lg:flex lg:flex-row w-[70rem] lg:mt-10 text-white gap-6 max-w-[1440px]">
        <div className="flex flex-col gap-4 items-center mt-14">
          <div className="scale-110 flex flex-col items-center">
            <div className="flex flex-row bg-gb-30 rounded-lg items-center justify-center w-60 h-16 gap-2 -m-6 relative">
              {/* <Star size={14} color="white" /> */}
              <div>
                <h2 className="uppercase">Melhor custo beneficio</h2>
                <p className="text-center">(Anual)</p>
              </div>
            </div>
            <div className="mb-4">
              <CardItem
                title={CardCustoBeneficio.title}
                text={CardCustoBeneficio.text}
                subTitle={CardCustoBeneficio.subTitle}
                isActive={true}
                isOpacity={true}
                isTitle={true}
              >
                <div className="flex flex-col items-center mb-8">
                  <Button link={CardCustoBeneficio.link} isActive={true} />
                  <span className="text-[10px] text-center mt-1">
                    Pagamento recorrente <br /> ( não utiliza o limite do seu
                    cartão)
                  </span>
                </div>
              </CardItem>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center mt-10">
          <div className="flex flex-row bg-gb-25 rounded-lg items-center justify-center w-60 h-10 gap-2 -m-8 relative">
            <h2 className="uppercase">Semestral</h2>
          </div>
          <CardItem
            title={CardSemestral.title}
            text={CardSemestral.text}
            subTitle={CardSemestral.subTitle}
            isActive={false}
            isOpacity={false}
            isTitle={false}
          >
            <Button link={CardSemestral.link} isActive={false} />
          </CardItem>
        </div>

        <div className="flex flex-col gap-4 items-center mt-10">
          <div className="flex flex-row bg-gb-25 rounded-lg items-center justify-center w-60 h-10 gap-2 -m-8 relative">
            <h2 className="uppercase">Trimestral</h2>
          </div>
          <CardItem
            title={CardTrimestral.title}
            text={CardTrimestral.text}
            subTitle={CardTrimestral.subTitle}
            isActive={false}
            isOpacity={false}
            isTitle={false}
          >
            <Button link={CardTrimestral.link} isActive={false} />
          </CardItem>
        </div>
        <div className="flex flex-col gap-4 items-center mt-10">
          <div className="flex flex-row bg-gb-25 rounded-lg items-center justify-center w-60 h-10 gap-2 -m-8 relative">
            <h2 className="uppercase">Mensal</h2>
          </div>
          <CardItem
            title={CardMensal.title}
            text={CardMensal.text}
            subTitle={CardMensal.subTitle}
            isActive={false}
            isOpacity={false}
            isTitle={false}
          >
            <div className="mt-5">
              <Button link={CardMensal.link} isActive={false} />
            </div>
          </CardItem>
        </div>
      </div>
    </div>
  )
}
