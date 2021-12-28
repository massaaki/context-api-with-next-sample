import styled from "styled-components";

export const Container = styled.div``

export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: lighter;

  ul {
    display: flex;
    li {
      & + li {
        margin-left: 1rem;
      }
    }
    
  }
`