import Link from "next/link"
import { useRouter } from 'next/router';
import Image from 'next/image';

import { NavLink } from "../NavLink";

import * as S from './styles';

export const Nav = () => {
  const { asPath } = useRouter();


  return (
    <S.Container>
      <S.Content>
        <div>
          <Link href="/">
            <a>
              <Image src="/logo.png" width={157} height={54} alt="Logo image" />
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