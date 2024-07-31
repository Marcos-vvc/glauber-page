import React from 'react';
export interface CardItemProps {
  title: string;
  text: string;
  subTitle: string;
  children: React.ReactNode;
  isActive: boolean;
  isOpacity: boolean;
  isTitle: boolean;
}

export function CardItem({
  title,
  text,
  subTitle,
  children,
  isActive,
  isOpacity,
  isTitle,
}: CardItemProps) {
  const classBg = isActive ? 'bg-gb-25' : 'bg-gb-30';
  const classOpacity = isOpacity ? '' : 'bg-opacity-50';
  const classTitle = isTitle ? 'text-gb-30' : 'text-gb-25';

  return (
    <div
      className={`flex flex-col rounded-xl h-[27rem] w-[18rem] p-4 border-2 border-gb-25 font-roboto text-sm items-center ${classBg} ${classOpacity}`}
    >
      <span className={`text-center text-2xl font-bold ${classTitle} py-4`}>
        {' '}
        {title}
      </span>
      <span className="text-justify"> {text}</span>
      <span className="mt-6 uppercase text-center text-xl font-bold">
        {' '}
        {subTitle}
      </span>

      {children}
    </div>
  );
}
