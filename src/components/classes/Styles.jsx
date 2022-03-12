import styled from "styled-components";

const ClassStyled = styled.div`
  width: 80%;
  margin: 40px auto;
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 3px;
  border: 1px solid lightgray;
  flex: 1;

  .class-container {
    border-bottom: 1px solid lightgray;
    min-height: 250px;
    padding: 16px;
  }

  .product-title {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
  }

  .product-title,
  .description {
    margin-bottom: 10px;
  }

  .to-cart {
    display: flex;
    align-items: center;
    flex-direction: row;

    p {
      padding: 0 8px;
    }

    span {
      font-style: italic;
    }

    .step-btn {
      border: 2px solid rgba(217, 195, 184, 1);
      padding: 8px 12px;
      border-radius: 16px;
      min-width: 80px;
      margin: 0 auto;

      &:hover {
        background-color: rgba(217, 195, 184, 0.5);
      }
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    margin: 24px 0;

    img {
      height: 120px;
      width: 120px;
      object-fit: cover;
      margin: 0 5px;
      border: 1px solid rgba(217, 195, 184, 1);
      border-radius: 3px;
    }
  }
  .class-container:nth-child(2n + 2) {
    .product-title {
      text-align: right;
    }
    .to-cart {
      flex-direction: row-reverse;
    }
  }

  .class-container:last-child {
    border-bottom: none;
  }
`;

export default ClassStyled;
