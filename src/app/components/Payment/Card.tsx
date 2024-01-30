export interface CardItemProps {
  title: string
  text: string
  subTitle: string
  children: React.ReactNode
  isActive: boolean
}

export function CardItem({
  title,
  text,
  subTitle,
  children,
  isActive,
}: CardItemProps) {
  const classBg = isActive ? 'bg-gb-25' : 'bg-gb-30'

  return (
    <div
      className={`flex flex-col rounded-xl h-[22rem] w-[20rem] p-4 border-2 border-gb-25 font-roboto text-sm bg-gb-30 bg-opacity-50 items-center ${classBg}`}
    >
      <span className="text-center text-2xl text-gb-25 py-4"> {title}</span>
      <span className="text-justify"> {text}</span>
      <span className="mt-6 uppercase"> {subTitle}</span>

      {children}
    </div>
  )
}
