import { useInvest } from '../../contexts/InvestContext';
import { ResumeItem } from '../ResumeItem';

import * as S from './styles';

export const Resume = () => {
  const { totalInvested, totalProfit } = useInvest();
  return (
    <S.Container>
      <S.Content>
        <ul>
          <ResumeItem title='Total' value={String((totalInvested + totalProfit).toFixed(2))} />
          <ResumeItem title='Invested' value={String(totalInvested.toFixed(2))} />
          <ResumeItem title='Profit' value={String(totalProfit.toFixed(2))} />
        </ul>
      </S.Content>
    </S.Container>

  )
}