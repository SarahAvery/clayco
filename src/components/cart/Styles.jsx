import styled from "styled-components";

const CartStyled = styled.div`
  flex: 1;

  .cart-container {
    background-color: #fafafa;
    border: 1px solid #747474;
    max-width: 800px;
    margin: 40px auto;
    border-radius: 3px;
  }

  h1 {
    border-bottom: 1px solid black;
    text-align: center;
    padding: 10px 0;
  }

  .button-nav-container {
    padding: 16px 0;
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  .next {
    background-color: rgba(217, 195, 184, 0.6);

    &:hover {
      background-color: rgba(217, 195, 184, 1);
    }
  }

  .back {
    background-color: rgba(217, 204, 184, 0.6);

    &:hover {
      background-color: rgba(217, 204, 184, 0.8);
    }
  }

  .step-btn:disabled {
    background-color: #b8b5b5;
    opacity: 60%;
    cursor: not-allowed;
  }

  .container {
    background-color: #ffffff;
    border-radius: 3px;
    padding: 8px;
  }

  .subtotal-container {
    border: 1px solid lightgrey;
    border-top: none;
    display: flex;
    justify-content: end;
    padding: 20px 0;

    div {
      width: 20%;
      display: flex;

      p:first-child {
        font-weight: bold;
      }

      p:last-child {
        font-style: italic;
        padding-left: 10px;
      }
    }
  }
  /* ORDER - PRODUCT */

  img {
    width: 80px;
    height: 80px;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }

  .product-container {
    display: flex;
    border: 1px solid lightgrey;
    align-items: center;
    padding: 8px;

    label {
      width: 100%;
      padding-left: 10px;
    }

    .product-title {
      font-size: 20px;
      font-weight: bold;

      span {
        font-size: 1rem;
        font-weight: normal;
        font-style: italic;
        padding-left: 8px;
      }
    }

    .product-info {
      display: flex;
      padding: 0 10px;

      .description {
        width: 90%;
      }
    }

    .quantity {
      display: flex;
      align-items: center;

      input {
        width: 60px;
        height: 40px;
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }

      button {
        height: 30px;
        width: 30px;
        margin: 0 5px;
      }
    }
  }

  /* BILLING */

  .billing h3 {
    padding-top: 8px;
    padding-bottom: 12px;

    svg {
      padding-left: 5px;
    }
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col-25 {
    flex: 25%;
  }

  .col-50 {
    flex: 50%;
  }

  .col-75 {
    flex: 75%;
  }

  .col-25,
  .col-50,
  .col-75 {
    padding: 0 16px;

    .container {
      margin-top: 8px;
    }
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 4px;
  }

  label {
    margin-bottom: 10px;
    display: block;
  }

  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }

  span.price {
    float: right;
    color: grey;
  }

  label svg {
    padding-right: 5px;
  }

  .input-error {
    font-size: 14px;
    height: 18px;
    margin-top: -24px;
    margin-bottom: 10px;
    color: #d80b0b;
  }

  .prov-error {
    margin-top: 13px;
  }
  /* ORDER SUMMARY */

  .order-summary {
    margin: 0 auto;
    width: 80%;

    .bill-sub-container {
      display: flex;
      border: 1px solid lightgrey;
      border-top: none;
    }

    .summary,
    .billing-info,
    .subtotal {
      padding: 10px 0;
    }

    h2 {
      font-size: 1.2rem;
      text-align: center;
      padding: 8px 0;
      text-decoration: underline;
    }

    h3 {
      font-size: 1rem;
      padding-bottom: 4px;
    }

    .summary {
      border: 1px solid lightgrey;

      .item {
        border-top: 1px solid #e9e9e9;
        padding: 8px 16px;
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .billing-info {
      border-right: 1px solid lightgrey;
      width: 50%;
    }

    .billing-container,
    .sub-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      min-height: 80px;
      padding: 8px 16px;
      font-weight: bold;

      div {
        width: 100%;
        margin: 0 auto;
        padding-bottom: 12px;
      }

      p {
        font-weight: normal;
        padding-right: 2px 10px;
      }
    }

    .subtotal {
      margin: 0 auto;
      width: 50%;

      .sub-container {
        margin: 0 auto;
        width: 80%;

        div {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    hr {
      width: 100%;
      margin-bottom: 8px;
      margin-top: 0;
    }
  }

  /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (and change the direction - make the "cart" column go on top) */
  @media (max-width: 800px) {
    .row {
      flex-direction: column-reverse;
    }
    .col-25 {
      margin-bottom: 20px;
    }
  }
`;

export default CartStyled;
