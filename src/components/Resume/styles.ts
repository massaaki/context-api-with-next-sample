import styled from 'styled-components';



export const Container = styled.div`
  padding: 4rem 0;
`

export const Content = styled.div`
  ul { 
    display: flex;
    justify-content: center;
    li { 
      & + li {
        margin-left: 1.5rem;
      }
    }
  }
`