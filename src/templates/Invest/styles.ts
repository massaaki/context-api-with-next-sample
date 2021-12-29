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
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    input[type=text],input[type=number], input[type=date] {
      height: 2rem;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
    input[type=submit] {
      background: var(--blue-500);
      color: #fafafa;
      font-size: 1rem;
      font-weight: bold;
      font-size: 1rem;
      height: 2.5rem;
      border-radius: 0.2rem;
      margin-top: 1rem;
    }
    select {
      height: 2rem;
      font-size: 1rem;
    }
  }
`;