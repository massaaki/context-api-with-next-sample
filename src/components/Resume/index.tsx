
import { ResumeItem } from '../ResumeItem';
import * as S from './styles';
export const Resume = () => {
  return (
    <S.Container>
      <S.Content>
        <ul>
          <ResumeItem title='current' value='$35.000,00' />
          <ResumeItem title='Invested' value='$25.000,00' />
          <ResumeItem title='Profit' value='$10.000,00' />
        </ul>
      </S.Content>
    </S.Container>

  )
}