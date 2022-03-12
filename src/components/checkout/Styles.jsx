import styled from "styled-components";

const CheckoutStyled = styled.div`
  width: 80%;
  margin: 40px auto;
  flex: 1;

  .container {
    background: white;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .confirmed {
    padding-bottom: 24px;
    p {
      font-weight: bolder;
      font-size: 3rem;
      text-shadow: 1px 1px 2px #000;
      color: rgba(217, 204, 184, 8);
    }
  }

  h2 {
    padding: 10px 0;
  }

  p {
    color: #747474;
  }

  .link-container {
    margin-top: 32px;
  }

  .step-btn {
    border: 2px solid rgba(217, 195, 184, 1);
    padding: 8px 12px;
    border-radius: 16px;
    display: flex;
    align-items: center;

    .icon {
      color: rgb(217, 195, 184);
    }
    p {
      padding-left: 10px;
      color: #3b3b3b;
    }

    &:hover {
      background-color: rgba(217, 195, 184, 0.5);

      .icon {
        color: white;
      }
    }
  }
`;

export default CheckoutStyled;
