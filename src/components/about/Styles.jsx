import styled from "styled-components";

const AboutStyled = styled.div`
  /* width: 80%; */
  /* margin: 40px auto; */
  /* background-color: rgba(250, 250, 250, 0.8); */
  /* border-radius: 3px; */
  /* border: 1px solid lightgray; */
  /* padding: 16px; */
  flex: 1;

  .container {
    width: 80%;
    margin: 40px auto;
    background-color: rgba(250, 250, 250, 0.8);
    border-radius: 3px;
    border: 1px solid lightgray;
    padding: 16px;
  }

  h2 {
    font-size: 1.2rem;
    text-align: center;
    padding: 10px;
    text-decoration: underline;
    padding-bottom: 20px;
  }

  p {
    padding: 10px;
    text-indent: 20px;
  }

  .aside {
    display: flex;
  }

  img {
    width: 40%;
    height: auto;
    margin: 10px 5px;
    border: 2px solid rgba(217, 195, 184, 1);
    border-radius: 3px;
  }
`;

export default AboutStyled;
