export interface NavItemProps {
  title: string
  link: string
  onClick?: () => void
}

export default function NavItem({ title, link, onClick }: NavItemProps) {
  return (
    <a
      href={link}
      className="flex items-center px-3 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300 cursor-pointer"
      onClick={onClick}
    >
      <span className="font-tektur text-lg text-white px-3 py-2 font-bold">
        {title}
      </span>
    </a>
  )
}
