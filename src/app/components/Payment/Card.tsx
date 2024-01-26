export interface CardItemProps {
  title: string
  text: string
  subTitle: string
  children: React.ReactNode
}

export function CardItem({ title, text, subTitle, children }: CardItemProps) {
  return (
    <div className="flex flex-col rounded-xl h-[22rem] w-[20rem] p-4 border-2 border-gb-100 font-roboto text-sm bg-gb-30 bg-opacity-50 items-center">
      <span className="text-center text-2xl text-gb-25 py-4"> {title}</span>
      <span className="text-justify"> {text}</span>
      <span className="mt-6 uppercase"> {subTitle}</span>

      {children}
    </div>
  )
}
