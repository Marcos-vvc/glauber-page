'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Menu } from 'lucide-react'
import NavItem from './NavItem'
import React from 'react'

export function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleItemClick = () => {
    setIsOpen(false)
  }
  return (
    <div className="lg:flex lg:justify-between max-w-[1440px] m-auto ">
      <div className="lg:w-1/4">
        <Collapsible
          open={isOpen}
          className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 p-4 lg:relative lg:m-auto lg:px-5 lg:py-8 bg-black data-[state=open]:bottom-0"
        >
          <div className="flex items-center justify-between data-[state=open]:hidden">
            <span className="font-bold text-gb-25 lg:text-3xl text-lg">
              Glauber Aguiar
            </span>

            <CollapsibleTrigger asChild className="lg:hidden">
              <Menu
                className="h-6 w-6 text-gb-25"
                onClick={() => setIsOpen(!isOpen)}
              />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent
            forceMount
            className="flex flex-1 flex-col data-[state=closed]:hidden lg:data-[state=open]:hidden"
          >
            <nav className="flex flex-col justify-center w-full items-center gap-6 m-auto">
              <NavItem title="Start" link="/" onClick={handleItemClick} />
              <NavItem
                title="Sobre mim"
                link="#about"
                onClick={handleItemClick}
              />
              <NavItem
                title="Serviços"
                link="#services"
                onClick={handleItemClick}
              />
              <NavItem
                title="Planos"
                link="#planos"
                onClick={handleItemClick}
              />
              <NavItem
                title="Avaliações"
                link="#avaliacao"
                onClick={handleItemClick}
              />
              <NavItem title="Dúvidas" link="#faq" onClick={handleItemClick} />
              <NavItem
                title="Contato"
                link="#contact"
                onClick={handleItemClick}
              />
            </nav>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="flex">
        <NavItem title="Start" link="/" />
        <NavItem title="Sobre mim" link="#about" />
        <NavItem title="Serviços" link="#services" />
        <NavItem title="Planos" link="#planos" />
        <NavItem title="Avaliações" link="#avaliacao" />
        <NavItem title="Dúvidas" link="#faq" />
        <NavItem title="Contato" link="#contact" />
      </div>
    </div>
  )
}

// className="flex flex-1 flex-col data-[state=closed]:hidden lg:data-[state=open]:hidden"

// className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 p-4 lg:relative lg:m-auto lg:px-5 lg:py-8 bg-black data-[state=open]:bottom-0"
