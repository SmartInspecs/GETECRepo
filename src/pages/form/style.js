import { styled } from "styled-components";

export const Title = styled.h3`
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  label {
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-3);
    margin-top: 1rem;
  }

  input,
  select {
    width: 100%;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    border: 1px solid var(--color-grey-1);
    background-color: var(--color-grey-1);
    border-radius: 0.75rem;
  }

  input {
    padding-left: 1rem;
  }

  span {
    font-size: var(--font-size-5);
    color: var(--error);
  }

  .checkbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      width: 30%;
      border: 1px solid var(--color-grey-1);
      border-radius: 0.75rem;
      margin: 2px;
    }
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: var(--primary-color);
    color: white;
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-3);
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #319730;
      transform: scale(1.1);
    }
  }
`;
