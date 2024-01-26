export interface NavItemProps {
  title: string
}

export default function NavItem({ title }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center px-3 hover:translate-y-[-5px] duration-7"
    >
      <span className="font-tektur text-lg text-white px-3 py-2">{title}</span>
    </a>
  )
}
