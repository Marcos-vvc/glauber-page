import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Menu } from 'lucide-react'
import NavItem from './NavItem'
import Intro from './Intro'

export function Header() {
  return (
    <div className="bg-[url('/fundo.png')] bg-cover bg-center bg-no-repeat h-[60rem] bg-black">
      <Collapsible className="fixed left-0 right-0 top-0 z-10 flex flex-col gap-6 p-4  data-[state=open]:bottom-0 lg:sticky lg:w-full lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 bg-black backdrop-opacity-10">
        <div className="flex items-center justify-between ">
          <span className="font-figtree font-bold text-orange-500 lg:text-3xl text-lg">
            Glauber Aguiar
          </span>
          <CollapsibleTrigger asChild className="lg:hidden">
            <Menu className="h-6 w-6 text-orange-500" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent
          forceMount
          className="flex flex-1 data-[state=closed]:hidden lg:data-[state=closed]:flex bg-red-300"
        >
          <nav className="flex w-full items-center gap-6 ">
            <NavItem title="Start" />
            <NavItem title="Sobre mim" />
            <NavItem title="Planos" />
            <NavItem title="Dúvidas" />
            <NavItem title="Contato" />
          </nav>
        </CollapsibleContent>
      </Collapsible>
      <Intro />
    </div>
  )
}
