import styled, { css } from "styled-components";

type ContentProps = {
  active: boolean;
}
export const Content = styled.li<ContentProps>`
  ${({ active }) => css`
    padding: 1rem;
    border-bottom: ${active ? "2px solid var(--blue-500)" : ''};
    color: ${active ? "var(--blue-500)" : ''};
  `}
`