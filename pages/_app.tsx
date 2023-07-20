import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* Renderuj główny komponent aplikacji */}
      <Component {...pageProps} />
      {/* Dodaj komponent Analytics */}
      <Analytics />
    </SessionProvider>
  );
}

export default MyApp;
