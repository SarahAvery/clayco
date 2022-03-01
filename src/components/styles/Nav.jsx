import styled from "styled-components";

const NavStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 20px 0;

  .logo {
    font-size: 2rem;

    span {
      color: red;
    }
  }

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

  /* @media (max-width: 800px) {
    padding: 20px;
  } */
`;

export default NavStyled;
