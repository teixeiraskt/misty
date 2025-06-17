import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maria Fernanda | Nanda - Conteúdo Exclusivo",
  description: "Acesso VIP ao conteúdo exclusivo da Maria Fernanda",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* UTMify Pixel */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></script>
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4132811207006911');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=4132811207006911&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        {/* Back Redirect Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // ALTERE O LINK PARA A PÁGINA QUE QUISER MOSTRAR QUANDO O USUÁRIO TENTAR SAIR
              const link = 'https://meubackredirect.com.br';

              function setBackRedirect(url) {
                let urlBackRedirect = url;
                urlBackRedirect = urlBackRedirect =
                  urlBackRedirect.trim() +
                  (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
                  document.location.search.replace('?', '').toString();

                history.pushState({}, '', location.href);
                history.pushState({}, '', location.href);
                history.pushState({}, '', location.href);

                window.addEventListener('popstate', () => {
                  console.log('onpopstate', urlBackRedirect);
                  setTimeout(() => {
                    location.href = urlBackRedirect;
                  }, 1);
                });
              }

              setBackRedirect(link);
            `
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}