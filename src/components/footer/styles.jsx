import styled from "styled-components";

const FooterStyled = styled.div`
  width: 100%;
  margin-top: 40px;
  border-top: 1px solid lightgray;

  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  /* .logo {
    font-size: 2rem;

    span {
      color: red;
    }
  } */

  ul {
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
  }

  a {
    text-decoration: none;
    color: rgb(34, 34, 34);
    padding: 4px 0;
  }
`;

export default FooterStyled;
