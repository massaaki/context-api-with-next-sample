import { createContext, ReactNode, useState, useContext } from 'react';
import { PlayerStatus } from '../interfaces/enums/PlayerStatus'

type PlayerContextData = {
  status: PlayerStatus;
  playPause: () => void;
}

const playerContext = createContext({} as PlayerContextData);



interface PlayerProviderProps {
  children: ReactNode
}


export function PlayerProvider({ children }: PlayerProviderProps) {

  const [status, setStatus] = useState<PlayerStatus>(PlayerStatus.stopped);


  const playPause = () => {
    setStatus(status === PlayerStatus.playing ? PlayerStatus.stopped : PlayerStatus.playing);
  }

  return (
    <playerContext.Provider value={{ status, playPause }}>
      {children}
    </playerContext.Provider>
  )
}


export function usePlayer() {
  const context = useContext(playerContext);
  return context;
}