import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="Central de descontos e promoções." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Black Hoje</title>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Sofia+Sans:wght@300;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <body style={{margin: 0}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
