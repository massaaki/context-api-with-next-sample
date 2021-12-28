import { InvestProvider } from "../contexts/InvestContext"
import { GlobalStyle } from '../styles/global';

import { Header } from '../components/Header';


function MyApp({ Component, pageProps }) {
  return (
    <InvestProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </InvestProvider>
  )
}

export default MyApp
