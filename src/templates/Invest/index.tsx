import { useState } from 'react';

import { useInvest } from '../../contexts/InvestContext';

import * as S from './styles';

export const Invest = () => {
  const [code, setCode] = useState('');
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [growthRate, setGrowthRate] = useState(0);
  const [month, setMonth] = useState(1);

  const { addStock } = useInvest();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code && price && amount && growthRate && (month >= 1 && month <= 12)) {
      addStock({
        amount,
        code,
        growthRate,
        month,
        price
      })

      setPrice(0);
      setAmount(0);

    }
  }

  return (
    <S.Container>
      <S.Content>
        <h1>Add stock</h1>
        <form onClick={handleSubmit}>
          <label htmlFor="code">Code:</label>
          <input type="text" name="code" id="code" onChange={(e) => setCode(e.target.value)} value={code} placeholder="stock code" />
          <label htmlFor="amount">Amount:</label>
          <input type="number" name="amount" id="amount" onChange={(e) => setAmount(Number(e.target.value))} value={amount} placeholder="amount" />
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price" onChange={(e) => setPrice(Number(e.target.value))} value={price} placeholder="price" />
          <label htmlFor="growthRate">Growth rate (per month):</label>
          <input type="number" name="growthRate" id="growthRate" onChange={(e) => setGrowthRate(Number(e.target.value))} value={growthRate} placeholder='average monthly growth (%)' />
          <label htmlFor="month">Month:</label>
          <input type="number" name="month" id="month" onChange={(e) => setMonth(Number(e.target.value))} placeholder="month(1-12)" value={month} min={1} max={12} />
          <input type="submit" value="Add" />
        </form>
      </S.Content>
    </S.Container>
  )
}