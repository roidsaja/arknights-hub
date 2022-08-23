import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="overlay">
        <div className="art"></div>
      </div>
      <p className="subtitle">
        A Frontend Project For Showcasing Arknight Operators
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
    font-size: 48px;
    line-height: 56px;
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
    width: 61.563rem;
    height: 61.563rem;
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
`;

export default Home;
