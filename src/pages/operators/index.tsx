import styled from "styled-components";
import useSWR from "swr";

import Card from "src/components/common/Card";

const url =
  "https://cors-anywhere-image-mltl3mrpia-an.a.run.app/https://rhodesapi.herokuapp.com/api/rhodes/operator";
const fetcher = async (url: RequestInfo | URL) =>
  await fetch(url).then((res) => res.json());

const Operators: React.FC = () => {
  const { data, error } = useSWR(url, fetcher);
  return (
    <WhitePanelWrapper>
      {!error ? (
        <>
          {data?.map((operator: any, index: number) => (
            <Card key={index} data={operator}></Card>
          ))}
        </>
      ) : (
        <div className="error">404 Error Fetching Operators</div>
      )}
    </WhitePanelWrapper>
  );
};

const WhitePanelWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 4rem 5rem;
  border-style: solid;
  border-radius: 2rem;
  background-color: #fbfffe;
  color: #181818;

  .error {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  @media screen and (max-width: 961px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Operators;
