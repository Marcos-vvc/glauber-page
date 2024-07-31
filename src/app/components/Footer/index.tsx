import Image from 'next/image';
import logo from '../../../../public/Logo.png';
import whats from '../../../../public/whatsapp.svg';
import React from 'react';

import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <div className="text-white flex flex-col items-center p-4 lg:w-[70rem] lg:flex lg:flex-row lg:items-center lg:justify-between lg:m-auto">
      <footer>
        <Image
          src={logo}
          alt=""
          className="w-40 h-36 text-white pointer-events-none"
        />
      </footer>
      <div className="flex flex-col gap-4 justify-center items-center mt-8">
        <h4 className="font-bold text-3xl">Contatos</h4>
        <a
          href="https://www.instagram.com/euglauberaguiar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="blank"
        >
          <span className="text-white flex gap-2">
            <Instagram /> @euglauberaguiar
          </span>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5561986343416&text&type=phone_number&app_absent=0"
          target="blank"
        >
          <span className="flex gap-2">
            <Image src={whats} alt="" className="w-6 h-6 text-white" />
            (61)986343416
          </span>
        </a>
      </div>
    </div>
  );
}
