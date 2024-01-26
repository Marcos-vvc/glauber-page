import NavItem from './NavItem'

export function Header() {
  return (
    <div className="flex">
      <nav className="flex justify-between w-full items-center gap-6 text-white">
        <NavItem title="Start" />
        <NavItem title="Sobre mim" />
        <NavItem title="Planos" />
        <NavItem title="Dúvidas" />
        <NavItem title="Contato" />
      </nav>
    </div>
  )
}
