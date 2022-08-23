import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="condition-links">
        <a>Terms of Condition</a>
        <a>Code of Conduct</a>
        <a>Privacy Policy</a>
      </div>
      <div className="copyright">
        <p>© 2022 Arknights FE </p>
      </div>
      <div className="project-links">
        <a>Arknights Official</a>
        <a>GitHub</a>
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
`;

export default Footer;
