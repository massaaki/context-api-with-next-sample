import { useInvest } from "../contexts/InvestContext"

export default function Home() {
  const { currentValue } = useInvest();
  return (
    <>
      <h1>{currentValue}</h1>
    </>

  )
}
