import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="condition-links">
        <a>Terms of Condition</a>
        <a>Code of Conduct</a>
        <a>Privacy Policy</a>
      </div>
      <div className="project-links">
        <a>Arknights Official</a>
        <a>GitHub</a>
      </div>
      <div className="copyright">
        <p>© 2022 Arknights FE </p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 6rem;
  padding-right: 6rem;
  background-color: #181818;
  justify-content: space-between;

  .condition-links {
    display: flex;
    flex-direction: column-reverse;

    a {
      color: #fbfffe;
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
    }
  }
  .copyright {
    display: flex;
    flex-direction: column-reverse;

    p {
      color: #fbfffe;
      padding-top: 0.6rem;
    }
  }
  .project-links {
    display: flex;
    flex-direction: column-reverse;

    a {
      color: #fbfffe;
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
    }
  }
  @media screen and (max-width: 961px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 0;
    padding-right: 0;
    background-color: #181818;
    justify-content: space-between;
    .condition-links {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      margin: 0 auto;
      text-align: center;
      border-bottom: 1px solid white;
    }
    .copyright {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      margin: 0 auto;
      text-align: center;
    }
    .project-links {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      margin: 0 auto;
      text-align: center;
      border-bottom: 1px solid white;
    }
  }
`;

export default Footer;
