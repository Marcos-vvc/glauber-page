import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Menu } from 'lucide-react'
import NavItem from './NavItem'
import { Header } from './Header'

export function Sidebar() {
  return (
    <Collapsible className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 p-4 lg:relative lg:m-auto lg:px-5 lg:py-8  bg-black data-[state=open]:bottom-0">
      <div className="flex items-center justify-between data-[state=open]:hidden">
        <span className="font-figtree font-bold text-orange-500 lg:text-3xl text-lg">
          Glauber Aguiar
        </span>
        {/* <Header /> */}

        <CollapsibleTrigger asChild className="lg:hidden">
          <Menu className="h-6 w-6 text-orange-500" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent
        forceMount
        className="flex flex-1 flex-col data-[state=closed]:hidden lg:data-[state=open]:hidden"
      >
        <nav className=" flex flex-col justify-center w-full items-center gap-6">
          <NavItem title="Start" />
          <NavItem title="Sobre mim" />
          <NavItem title="Planos" />
          <NavItem title="Dúvidas" />
          <NavItem title="Contato" />
        </nav>
      </CollapsibleContent>
    </Collapsible>
  )
}
