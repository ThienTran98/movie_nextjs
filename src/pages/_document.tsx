import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <title>Phim hay</title>
      <Head>
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
