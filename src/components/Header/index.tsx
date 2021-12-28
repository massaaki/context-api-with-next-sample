import { Nav } from '../Nav';
import { Resume } from '../Resume';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Nav />
        <Resume />

      </S.Content>
    </S.Container>
  )
}