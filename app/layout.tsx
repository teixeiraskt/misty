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