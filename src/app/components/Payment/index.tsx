import { Star } from 'lucide-react'
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
      <h2 className="mt-10 font-bold text-4xl text-gb-25">Planos de treinos</h2>

      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 w-[70rem] lg:mt-10 text-white gap-10">
        <div className="flex flex-col gap-4 items-center mt-10">
          <div className="flex flex-row bg-gb-30 rounded-lg items-center justify-center w-60 h-10 gap-2 -m-8 relative">
            <Star size={14} color="white" />
            <h2 className="uppercase">Melhor custo beneficio</h2>
          </div>
          <div>
            <CardItem
              title={CardCustoBeneficio.title}
              text={CardCustoBeneficio.text}
              subTitle={CardCustoBeneficio.subTitle}
              isActive={false}
            >
              <Button link={CardCustoBeneficio.link} />
            </CardItem>
          </div>
          {/* <span className="text-sm">
            Pagamento recorrente ( não utiliza o limite do seu cartão)
          </span> */}
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
          >
            <Button link={CardSemestral.link} />
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
          >
            <Button link={CardTrimestral.link} />
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
          >
            <Button link={CardMensal.link} />
          </CardItem>
        </div>
      </div>
    </div>
  )
}
