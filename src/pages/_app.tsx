import { InvestProvider } from "../contexts/InvestContext"

function MyApp({ Component, pageProps }) {
  return (
    <InvestProvider>
      <Component {...pageProps} />
    </InvestProvider>
  )
}

export default MyApp
