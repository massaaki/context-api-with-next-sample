import Link from "next/link";
import { useRouter } from "next/router";

import * as S from './styles';

interface NavLinkProps {
  href: string;
  title: string;
}

export const NavLink = ({ href, title }: NavLinkProps) => {
  const { asPath } = useRouter();
  let active = asPath == href;
  if (asPath.startsWith(String(href)) && href !== '/') {
    active = true;
  }

  return (
    <S.Content active={active}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </S.Content>
  )
}