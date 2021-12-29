import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--max-content-width);
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 2rem 1rem;
  background: #fafafa0f;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  
  table {
    tr{
      td, th {
        border-bottom: 1px solid #fafafa0f;
        padding: 0.5rem 1rem;
      }
      td {
        color: var(--blue-500)
      }
    }
  }
`;