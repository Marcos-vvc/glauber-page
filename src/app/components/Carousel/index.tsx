import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import hiper from '../../../../public/hipertrofia.png'
import { Check } from 'lucide-react'
import levantador from './../../../../public/levantador.png'

export function Carousell() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm lg:flex-none "
    >
      <CarouselContent className="flex p-6 gap-6">
        <CarouselItem className="flex flex-col border-white border-2 h-72 rounded-xl">
          <Image src={hiper} alt="" className="h-48 rounded-xl w-full" />
          <div className="flex flex-row items-center gap-2 w-full p-1 text-white">
            <Check className="text-white rounded-2xl bg-gb-25" size={18} />
            <Image src={levantador} alt="" className=" w-8 h-8" />
            <span>Hipertrofia</span>
          </div>
        </CarouselItem>

        <CarouselItem className="flex flex-col items-center border-white border-2 h-72 rounded-xl">
          <Image
            src={hiper}
            alt=""
            className="h-32 w-36 rounded-xl border-gb-25 border-2"
          />
          <div className="lg:flex lg:flex-row lg:items-center lg:gap-2">
            <Check className="text-black rounded-2xl bg-gb-25" size={18} />
            <span>Hipertrofia</span>
          </div>
        </CarouselItem>
        <CarouselItem className="flex flex-col border-white border-2 h-72 rounded-xl">
          <Image
            src={hiper}
            alt=""
            className="h-32 w-36 rounded-xl border-gb-25 border-2"
          />
          <div className="lg:flex lg:flex-row lg:items-center lg:gap-2">
            <Check className="text-black rounded-2xl bg-gb-25" size={18} />
            <span>Hipertrofia</span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
