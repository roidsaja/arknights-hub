import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <title>Arknights Hub</title>
      <div className="overlay">
        <div className="art"></div>
      </div>
      <p className="subtitle">Arknights Hub</p>
      <p className="subtitle-small">
        A frontend project for showcasing Arknights Operators
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

    &-small {
      font-style: normal;
      font-weight: 400;
      font-size: clamp(12px, 5vw, 24px);
      line-height: clamp(48px, 5vw, 56px);
      color: #fbfffe;
      position: absolute;
      top: 40%;
      left: 40%;
      z-index: 1;
      text-transform: uppercase;
      text-align: start;
    }
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
      text-align: center;
      top: 40%;
      left: 0;
      margin: 0 clamp(1rem, 100vw, 2rem);

      &-small {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        top: 50%;
        left: 0;
        margin: 0 clamp(1rem, 100vw, 2rem);
      }
    }
    .overlay {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Home;
