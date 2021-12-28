import * as S from './styles';

interface ResumeItemProps {
  title: string;
  value: string;
}


export const ResumeItem = ({ title, value }: ResumeItemProps) => {
  return (
    <S.Content>
      <p>{title}</p>
      <div>{value}</div>
    </S.Content>
  )
}