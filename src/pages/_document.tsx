import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <title>Phim hay</title>
        <meta property="og:title" content="Phim hay" key="title" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>
      <body className="bg-[#1e293b]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
