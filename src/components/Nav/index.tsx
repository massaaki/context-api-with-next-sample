import Link from "next/link"
import { useRouter } from 'next/router';

import { Logo } from "../../illustrations/Logo"
import { NavLink } from "../NavLink";

import * as S from './styles';

export const Nav = () => {
  const { asPath } = useRouter();


  return (
    <S.Container>
      <S.Content>
        <div>
          <Logo />
        </div>
        <ul>
          <NavLink href="/" title="Home" />
          <NavLink href="/invest" title="Invest" />
          <NavLink href="/history" title="History" />
        </ul>
      </S.Content>
    </S.Container>
  )
}