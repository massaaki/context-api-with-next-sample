import { useInvest } from '../../contexts/InvestContext';

import * as S from './styles';

export const History = () => {
  const { stocks } = useInvest();

  return (
    <S.Container>
      <S.Content>
        <h1>History</h1>

        <table>
          <tr>
            <th>stock</th>
            <th>total</th>
            <th>month</th>
          </tr>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.code}</td>
              <td>{stock.price * stock.amount}</td>
              <td>{stock.month}</td>
            </tr>
          ))}

        </table>

      </S.Content>
    </S.Container>
  )
}