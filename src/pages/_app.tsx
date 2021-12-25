import { PlayerProvider } from "../contexts/PlayerContext"

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  )
}

export default MyApp
