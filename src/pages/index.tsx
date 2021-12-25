import { usePlayer } from "../contexts/PlayerContext"

export default function Home() {
  const { playPause, status } = usePlayer();
  return (
    <>
      <h1>{status}</h1>
      <button onClick={playPause}> Change Player status</button>
    </>

  )
}
