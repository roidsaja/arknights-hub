import { NextPage } from "next";
import styled from "styled-components";

const PrivacyPolicy: NextPage = () => {
  return (
    <PrivacyPolicyWrapper>
      <h1>Privacy Policy</h1>
      We automatically collect data on how our users visit Arknight Hub, such as
      your IP address, browser, browser language, operating system, device
      identifiers, and cookies. Our website currently usees cookies to enhance
      its functionality. You may disable cookies in your web browser, but this
      may limit your ability to access Arknights Hub.
      <h2>Policy on collecting sensitive personal information</h2>
      Arknights Hub does not gather any of your sensitive personal information,
      such as your social security number, driver's license number, race,
      ethicity, religion, health metrics, political associations, or details on
      your criminal background.
      <h2>How the information collected is used</h2>
      We only use your personal information to help you utilize everything
      Arknights Hub has to offer. This includes:
      <ul>
        <li>
          <p>
            Making all of Arknight Hub's services available to you in a
            convenient manner.
          </p>
        </li>
        <li>
          <p>
            Evaluating analytics to see how our customers engage with Arknights
            Hub
          </p>
        </li>
      </ul>
      <h2>Information Security</h2>
      We do our best to keep your private information secure and safe.
      <h2>Policy Update</h2>
      This privacy policy was last updated on 15/11/2022. If we adjust the
      privacy policy, we will inform all contributors of this change and post
      the most recent update date here. Once posted, the new privacy policy
      shall be effective immediately.
    </PrivacyPolicyWrapper>
  );
};

const PrivacyPolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin: 2rem;
`;
export default PrivacyPolicy;
