import styled from "styled-components";

const ContactStyled = styled.div`
  width: 80%;
  margin: 40px auto;
  flex: 1;

  .container {
    min-height: 350px;

    background-color: rgba(250, 250, 250, 0.8);
    border-radius: 3px;
    border: 1px solid lightgray;
    padding: 16px;
    min-height: 450px;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: center;
    margin: 0 auto;
    min-height: 300px;
    align-items: center;
    padding: 40px 0;
  }

  h2 {
    font-size: 1.2rem;
    text-align: center;
    padding: 10px;
    text-decoration: underline;
    width: 100%;
  }

  p {
    padding: 10px;
    padding-top: 0;
  }

  .contact,
  .hours-container {
    flex: 1;
    margin: 0 auto;
    /* width: 40%; */
    padding: 20px 0;

    span {
      font-weight: bold;
      padding-right: 5px;
    }
  }

  .hours-container {
    .title {
      font-weight: bold;
      width: 100%;
      text-align: center;
    }

    .hours div {
      display: flex;
      justify-content: flex-end;
    }

    .days {
      font-weight: bold;
    }
  }

  .img-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 80%;
    border-radius: 3px;
  }
`;

export default ContactStyled;
