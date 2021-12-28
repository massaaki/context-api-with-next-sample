import * as S from './styles';

export const Invest = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>Add stock</h1>
        <form>
          <input type="text" placeholder='stock' />
          <input type="number" placeholder='value' />
          <input type="number" placeholder='average annual growth (%)' />
          <input type="date" />
          <input type="submit" value="Add" />
        </form>
      </S.Content>
    </S.Container>
  )
}