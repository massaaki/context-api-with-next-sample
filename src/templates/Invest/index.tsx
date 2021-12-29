import { useEffect, useState } from 'react';

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
      setAmount(0);
      setMonth(0);

    }
  }


  useEffect(() => {

    if (code) {
      switch (code) {
        case 'APPLE':
          setPrice(250);
          setGrowthRate(2.3);
          break;
        case 'GOOGLE':
          setPrice(180);
          setGrowthRate(1.6);
          break;
        case 'FACEBOOK':
          setPrice(60);
          break;
        case 'BERKSHIRE':
          setPrice(80);
          setGrowthRate(1.5);
          break;
        case 'AMAZON':
          setPrice(120);
          setGrowthRate(3);
          break;
        default:
          setPrice(0);
          setGrowthRate(0);
      }

    }
  }, [code]);

  return (
    <S.Container>
      <S.Content>
        <h1>Add stock</h1>
        <form onSubmit={handleSubmit}>

          <select id="codes" name="codes" onChange={(e) => setCode(e.target.value)} >
            <option value="SELECT">Select</option>
            <option value="APPLE">Apple</option>
            <option value="GOOGLE">Google</option>
            <option value="FACEBOOK">Facebook</option>
            <option value="BERKSHIRE">Berkshire</option>
            <option value="AMAZON">Amazon</option>
          </select>

          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price" onChange={(e) => setPrice(Number(e.target.value))} value={price} placeholder="price" disabled />
          <label htmlFor="growthRate">Growth rate (per month):</label>
          <input type="number" name="growthRate" id="growthRate" onChange={(e) => setGrowthRate(Number(e.target.value))} value={growthRate} placeholder='average monthly growth (%)' disabled />

          <label htmlFor="amount">Amount:</label>
          <input type="number" name="amount" id="amount" onChange={(e) => setAmount(Number(e.target.value))} value={amount} placeholder="amount" />


          <label htmlFor="month">Month:</label>
          <input type="number" name="month" id="month" onChange={(e) => setMonth(Number(e.target.value))} placeholder="month(1-12)" value={month} min={1} max={12} />
          <input type="submit" value="Add" />
        </form>
      </S.Content>
    </S.Container>
  )
}