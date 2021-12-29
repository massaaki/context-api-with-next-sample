import { InvestProvider } from "../contexts/InvestContext"
import { GlobalStyle } from '../styles/global';

import { Header } from '../components/Header';
import { BackToPocPedia } from "../components/BackToPockPedia";


function MyApp({ Component, pageProps }) {
  return (
    <InvestProvider>
      <BackToPocPedia />
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </InvestProvider>
  )
}

export default MyApp
