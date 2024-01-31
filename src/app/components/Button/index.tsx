export interface LinkProps {
  link: string
  isActive: boolean
}

export function Button({ link, isActive }: LinkProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center  mt-8 w-32 h-10 rounded-md bg-gb-25  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300 cursor-pointer ${isActive ? 'bg-gb-30' : ''}`}
    >
      <a className="uppercase" href={link} target="blank">
        Assinar
      </a>
    </div>
  )
}
