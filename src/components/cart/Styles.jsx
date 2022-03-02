import styled from "styled-components";

const CartStyled = styled.div`
  background-color: #fafafa;
  border: 1px solid #747474;
  max-width: 800px;
  margin: 20px auto;
  border-radius: 3px;

  h1 {
    border-bottom: 1px solid black;
    text-align: center;
    padding: 10px 0;
  }

  .button-nav-container {
    padding: 10px 0;
    margin: 0 auto;
    width: 60%;
    display: flex;
    justify-content: flex-end;
  }
  .step-btn {
    padding: 15px 32px;
    min-width: auto;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 3px;
    color: #ffffff;
    border-style: none;
  }

  .next {
    background-color: #45a049;
    margin-left: 30%;

    &:hover {
      background-color: #3e9142;
    }
  }

  .back {
    background-color: #f5a53c;
    border: 1px solid #965f17;

    &:hover {
      background-color: #eb9729;
    }
  }

  button.step-btn:disabled {
    background-color: #9e9d9d;
  }

  .container {
    background-color: #ffffff;
    border: 1px solid lightgrey;
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
  /* order - Product */

  img {
    width: 80px;
    height: 80px;
    border: 1px solid lightgrey;
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

  /* billing */

  h3 {
    padding-top: 8px;
    padding-bottom: 12px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    /* margin: 0 -16px; */
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

  /* Order Summary */

  .order-summary {
    margin: 0 auto;
    width: 80%;
    border: 1px solid lightgrey;

    h2 {
      font-size: 1.2rem;
      text-align: center;
    }

    .summary {
      /* width: 50%; */

      .item {
        border: 1px solid lightgrey;
        padding: 8px 16px;
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .billing-info {
      width: 100%;

      div {
        padding: 8px 16px;
        font-weight: bold;

        p {
          font-weight: normal;
        }
      }
    }

    .subtotal {
      margin: 0 auto;
      border-top: 1px solid lightgrey;

      .sub-container {
        margin: 0 auto;
        width: 30%;

        div {
          display: flex;
          justify-content: space-between;
          padding: 8px;

          p:first-child {
            font-weight: bold;
          }
        }
      }
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
