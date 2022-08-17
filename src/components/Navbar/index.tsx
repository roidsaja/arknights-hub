import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const navigationRoutes = ["home", "about", "operators"];

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <NavbarWrapper>
      {navigationRoutes.map((singleRoute) => {
        return (
          <NavigationLink
            key={singleRoute}
            href={`/${singleRoute}`}
            text={singleRoute}
            router={router}
            className="container"
          />
        );
      })}
    </NavbarWrapper>
  );
};

const NavigationLink = ({ href, text, router }: any) => {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <a
        href={href === "/home" ? "/" : href}
        className={`${isActive && "nav_item_active"} nav_item`}
      >
        {text}
      </a>
    </Link>
  );
};

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top 1rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -6px rgb(0 0 0 / 0.1);
  border-style: hidden;

  .container {
    justify-content: space-between;
    margin: 0 auto;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .nav_item {
    text-transform: capitalize;
	color: gray;
	text-decoration: none;
	padding: 5px 10px;
	border-bottom: 2px solid transparent;
  }

  .nav_item_active {
    color: #FBFFFE;
	border-color: #67B7A0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Navbar;
