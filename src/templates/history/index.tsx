import * as S from './styles';

export const History = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>History</h1>

        <table>
          <tr>
            <th>stock</th>
            <th>unit price</th>
            <th>amount</th>
            <th>total</th>
            <th>month</th>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>$150</td>
            <td>2,3</td>
            <td>$345</td>
            <td>1</td>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>$150</td>
            <td>2,3</td>
            <td>$345</td>
            <td>1</td>
          </tr>
          <tr>
            <td>AAPL</td>
            <td>$150</td>
            <td>2,3</td>
            <td>$345</td>
            <td>1</td>
          </tr>
        </table>

      </S.Content>
    </S.Container>
  )
}