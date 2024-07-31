import React from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Sidebar } from './components/Header';
import Script from 'next/script';
import Head from 'next/head';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '700'],
});

export const metadata = {
  title: 'Glauber Aguiar',
  description:
    'personal trainer, professor, educador físico, treinamento, reabilitação, saúde e bem-estar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} scrollbar-thumb-gb-25 scrollbar-track-transparent scrollbar-thin overflow-y-scroll`}
    >
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/svg+xml" href="/Logo.png" />

        <Script id="fb-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${process.env.FACEBOOK_PIXEL_ID});
        fbq('track', 'PageView');`}
        </Script>
      </Head>

      <body className="bg-black ">
        <div className="min-h-screen overflow-hidden">
          <Sidebar />
          <main className="max-w-[100vw]">{children}</main>
        </div>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=784332130439203&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
