import styled from "styled-components";

const FooterStyled = styled.div`
  border-top: 1px solid lightgray;
  max-height: 200px;
  padding: 20px 0;

  /* position: absolute;
  bottom: 0; */
  width: 100%;
  max-width: 1200px;

  .logo {
    font-size: 12px;

    span {
      color: red;
    }
  }

  .container {
    text-align: center;

    div {
      padding: 10px 0;
    }
  }

  .title {
    font-size: 20px;
    font-style: italic;
  }

  .icon {
    background-color: rgba(217, 195, 184, 1);
    padding: 8px;
    border-radius: 50%;
    margin: 0 5px;
    font-size: 24px;
    cursor: pointer;

    path {
      fill: white;
    }
  }

  .para {
    font-size: 14px;
    cursor: pointer;
  }
  /* ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link {
      margin: 0 30px;
      border-bottom: none;
      transition: border 0.1s ease-in-out;

      &:hover {
        border-bottom: 1px solid black;
      }
    }
  } */

  /* a {
    text-decoration: none;
    color: rgb(34, 34, 34);
    padding: 4px 0;
  } */
`;

export default FooterStyled;
