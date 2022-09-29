import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="overlay">
        <div className="art"></div>
      </div>
      <p className="subtitle">
        A Frontend Project For Showcasing Arknights Operators
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: clamp(18px, 5vw, 48px);
    line-height: clamp(48px, 5vw, 56px);
    letter-spacing: 0.3em;
    color: #fbfffe;
    position: absolute;
    top: 30%;
    left: 40%;
    z-index: 1;
    text-transform: uppercase;
    text-align: start;
  }

  .overlay {
    width: clamp(20rem, 100vw, 61.563rem);
    height: clamp(20rem, 100vw, 61.563rem);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/fiametta-art-e2.png");
    opacity: 0.3;
    display: block;
  }

  .art {
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  @media screen and (max-width: 961px) {
    display: flex;
    flex-direction: column;
    .subtitle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      top: clamp(10%, 1vw, 30%);
      left: clamp(10%, 1vw, 40%);
      text-align: center;
    }
    .overlay {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Home;
