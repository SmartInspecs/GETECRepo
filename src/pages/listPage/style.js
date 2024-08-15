import { styled } from "styled-components";

export const PaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const PaperView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  padding: 10px;
  border-radius: 8px;
  h2 {
    font-size: 1rem;
    font-weight: 700;
  }
  button {
    width: 80px;
  }
`;
