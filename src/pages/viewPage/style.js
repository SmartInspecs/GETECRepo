import { styled } from "styled-components";

export const ContainerView = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  height: 100vh;

  .list {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  li {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`;
