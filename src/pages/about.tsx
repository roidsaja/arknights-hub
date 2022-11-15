import Link from "next/link";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <title>About</title>
      <h1>What is it about?</h1>
      <p>
        Arknights Hub is a side-project for learning many things in frontend
        development with a modern tech stack approach. Think of it like the
        Gamepress wiki for Arknights but with a much more simplified, minimal
        and non-bloated look.
      </p>
      <p>
        I will also try to include some minigames as well that will utilize the{" "}
        <Link href="https://github.com/wesngu28/rhodesapi">
          <a>rhodesapi</a>
        </Link>{" "}
        from wesngu28.
      </p>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem;

  h1 {
    border-bottom: 2px solid transparent;
    border-color: #67b7a0;
  }

  a {
    font-weight: 600;
    font-style: italic;

    &:hover {
      color: #67b7a0;
    }
  }
`;

export default About;
