import styled from "styled-components";

const ContactStyled = styled.div`
  width: 80%;
  margin: 40px auto;
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 3px;
  border: 1px solid lightgray;
  padding: 16px;
  min-height: 450px;

  h2 {
    font-size: 1.2rem;
    text-align: center;
    padding: 10px;
    text-decoration: underline;
  }

  .container {
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    padding: 10px;
    padding-top: 0;
  }

  .contact,
  .hours-container {
    margin: 0 auto;
    width: 40%;
    padding: 20px 0;

    span {
      font-weight: bold;
      padding-right: 5px;
    }
  }

  .hours-container {
    border-top: 1px solid lightgray;

    .title {
      font-weight: bold;
      width: 100%;
      text-align: center;
    }

    .hours {
      width: 90%;
    }

    .hours div {
      display: flex;
      justify-content: flex-end;
    }

    .days {
      font-weight: bold;
    }
  }
`;

export default ContactStyled;
