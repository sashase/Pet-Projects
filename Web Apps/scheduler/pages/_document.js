import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-whiteGreen dark:bg-blackGreen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
