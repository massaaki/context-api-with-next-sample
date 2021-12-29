import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { Stock } from '../interfaces/Stock';

type InvestContextData = {
  totalProfit: number;
  totalInvested: number;
  stocks: Stock[];
  addStock: (stock: Stock) => void;
}

const investContext = createContext({} as InvestContextData);

interface PlayerProviderProps {
  children: ReactNode
}


export function InvestProvider({ children }: PlayerProviderProps) {

  const [totalInvested, setTotalInvested] = useState<number>(0);
  const [totalProfit, setTotalProfit] = useState<number>(0);
  const [stocks, setStocks] = useState<Stock[]>([]);


  function addStock(stock: Stock) {
    setStocks([...stocks, stock]);
    setTotalInvested(totalInvested + stock.amount * stock.price);
  }


  useEffect(() => {
    const totalInvested = stocks.reduce((acc, stock) => (acc + Number(stock.amount) * Number(stock.price)), 0);
    setTotalInvested(totalInvested);

    const totalProfit = stocks.reduce((acc, stock) => {
      const n = 12 - stock.month;
      const c = stock.amount * stock.price;
      const total = c * Math.pow((1 + stock.growthRate / 100), n);
      return acc + total;
    }, 0)

    setTotalProfit(totalProfit - totalInvested);
  }, [stocks])


  return (
    <investContext.Provider value={{ totalInvested, totalProfit, stocks, addStock }}>
      {children}
    </investContext.Provider>
  )
}


export function useInvest() {
  const context = useContext(investContext);
  return context;
}