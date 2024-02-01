'use client'

import React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Carousell() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      plugins={[plugin.current]}
      className="w-full max-w-sm lg:flex-none"
    >
      <CarouselContent className="flex p-4 gap-6 mt-8">
        <CarouselItem className="flex flex-col border-white border-2 rounded-xl bg-[url('/feed01.png')] bg-cover bg-center bg-no-repeat h-[25rem]"></CarouselItem>

        <CarouselItem className="flex flex-col items-center border-white border-2 rounded-xl bg-[url('/feed02.png')] bg-cover bg-center bg-no-repeat h-[25rem]"></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
