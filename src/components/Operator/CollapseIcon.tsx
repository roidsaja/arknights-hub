import useCollapse from "react-collapsed";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import styled from "styled-components";

type Props = {
  title: string;
  children: React.ReactNode;
};

const CollapseIcon: React.FC<Props> = ({ title, children }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div {...getToggleProps()}>
      <h2>
        {title}
        <Expandongs>
          {isExpanded ? <GoTriangleUp /> : <GoTriangleDown />}
        </Expandongs>
      </h2>
      <div {...getCollapseProps()}>{children}</div>
    </div>
  );
};
const Expandongs = styled.span`
  display: flex;
  padding-left: 0.5rem;
  text-align: center;
  align-items: center;
`;
export default CollapseIcon;
