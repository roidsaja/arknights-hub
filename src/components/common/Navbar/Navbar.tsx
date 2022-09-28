import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const navigationRoutes = ["about", "operators"];

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <NavbarWrapper>
      <div className="nav_logo">
        <Link href="/">
          <a aria-label="Logo">
            <Image src="/Arknights-logo.jpeg" width="70" height="70" alt="" />
          </a>
        </Link>
      </div>
      <div className="nav_menu">
        {navigationRoutes.map((singleRoute) => {
          return (
            <NavigationLink
              key={singleRoute}
              href={`/${singleRoute}`}
              text={singleRoute}
              router={router}
            />
          );
        })}
      </div>
    </NavbarWrapper>
  );
};

const NavigationLink = ({ href, text, router }: any) => {
  const isActive = router.pathname === (href === "/home" ? "/" : href);
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
  padding-top: 1rem;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 10px 10px -6px rgb(0 0 0 / 0.1);
  border-style: hidden;

  .nav_logo {
    display: flex;
    align-items: center;
  }

  .nav_menu {
    display: flex;
    align-items: center;
  }

  .nav_item {
    text-transform: capitalize;
    color: gray;
    text-decoration: none;
    padding: 0 10px;
    margin: 0 10px;
    border-bottom: 2px solid transparent;
  }

  .nav_item_active {
    color: #fbfffe;
    border-color: #67b7a0;
  }

  @media screen and (max-width: 961px) {
    width: 100%;
  }
`;

export default Navbar;
