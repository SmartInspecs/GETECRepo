import { styled } from "styled-components";

export const CardWrapper = styled.div`
  width: 40%;
  height: 175px;
  border: 2px solid #f5f5f5;
  border-radius: 12px;
  background-color: var(--color-grey-1);
  padding: 1.55rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 960px) {
    width: 90%;
  }
  .header {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.7rem;
      font-weight: 500;
      color: white;
      background-color: var(--primary-color);
      border-radius: 8px;
      padding: 4px 8px;
    }

    p {
      font-size: 10px;
      font-weight: 500;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;

    .info__titulo {
      font-size: 1rem;
      font-weight: 700;
    }

    .info__autores {
      font-size: 0.75rem;
      font-weight: 500;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    .footer__ano {
      font-size: 0.75rem;
    }
    .footer_area {
      font-size: 0.75rem;
    }
  }
`;
