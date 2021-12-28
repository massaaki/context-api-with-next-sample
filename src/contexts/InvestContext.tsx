import { createContext, ReactNode, useState, useContext } from 'react';

type InvestContextData = {
  currentValue: number;
}

const investContext = createContext({} as InvestContextData);



interface PlayerProviderProps {
  children: ReactNode
}


export function InvestProvider({ children }: PlayerProviderProps) {

  const [currentValue, setCurrentValue] = useState<number>(0);


  return (
    <investContext.Provider value={{ currentValue }}>
      {children}
    </investContext.Provider>
  )
}


export function useInvest() {
  const context = useContext(investContext);
  return context;
}