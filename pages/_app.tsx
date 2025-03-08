import '../styles/globals.css'
import type { AppProps} from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
          <link rel="shortcut icon" href="/gennbi_square.svg" />
          <title>Gennbi</title>
          <meta name="description" content='A pre-construction fix!'/>
        </Head>
      <Component {...pageProps} />
      {/* <TawkMessengerReact
                propertyId="61ab55eb80b2296cfdd0021e"
                widgetId="1fm2kf97j"/> */}
      </ChakraProvider>)
}

export default MyApp
