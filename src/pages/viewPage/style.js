import { styled } from "styled-components";

export const ContainerView = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  height: 100vh;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    p {
      text-decoration: none;
      color: black;
      transition: 0.3s ease;
      cursor: pointer;
    }

    p:hover {
      color: #575454;
      transform: scale(1.05);
    }

    button {
      padding: 12px 24px;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s ease;
    }

    button:hover {
      background-color: var(--primary-secondary);
      transform: scale(1.05);
    }
  }

  .hero {
    h1 {
      font-size: 2rem;
      margin-top: 24px;
      font-weight: 600;
    }

    p {
      margin-top: 12px;
      font-size: 1rem;
    }

    .search-bar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 12px;
      margin-top: 24px;
      height: 46px;

      input {
        width: 60%;
        padding: 12px;
        border: 1px solid var(--color-grey-3);
        border-radius: 8px;
      }

      input::placeholder {
        font-size: 0.9rem;
      }

      button {
        display: flex;
        align-items: center;
        padding: 12px 24px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s ease;
      }

      button:hover {
        background-color: var(--primary-secondary);
        transform: scale(1.05);
      }
    }
  }

  .view-section {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
    margin-top: 72px;

    .view-section__filter {
      width: 25%;
      display: flex;
      flex-direction: column;
      gap: 16px;

      h2 {
        font-size: 1.25rem;
        font-weight: 600;
      }
    }

    .view-section__works {
      width: 75%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 24px;

      .cards {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 24px;
        margin-top: 24px;
      }
    }
  }

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

export const FormFilter = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  /* .year {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;

      .item {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: flex-end;
      }
    }
  } */

  label,
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  .research-area {
    select {
      width: 90%;
    }
  }
  select {
    width: 90%;
    border-radius: 8px;
  }
  button {
    padding: 12px 24px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
  }

  button:hover {
    background-color: var(--primary-secondary);
    transform: scale(1.05);
  }
`;
