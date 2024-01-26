export interface LinkProps {
  link: string
}

export function Button({ link }: LinkProps) {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-gb-25 mt-6 w-32 h-10 rounded-md bg-gb-25 bg-opacity-50 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300 cursor-pointer">
      <a className="uppercase" href={link} target="blank">
        Assinar
      </a>
    </div>
  )
}
