import { InvestProvider } from "../contexts/InvestContext"
import { GlobalStyle } from '../styles/global';


function MyApp({ Component, pageProps }) {
  return (
    <InvestProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </InvestProvider>
  )
}

export default MyApp
