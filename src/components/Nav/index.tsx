import Link from "next/link"
import { useRouter } from 'next/router';

import { NavLink } from "../NavLink";
import { Logo } from "../../illustration/Logo";

import * as S from './styles';

export const Nav = () => {
  const { asPath } = useRouter();


  return (
    <S.Container>
      <S.Content>
        <div>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
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