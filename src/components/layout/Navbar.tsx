import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";

const menu = [
  {
    key: "home",
    path: "/",
    label: "Home",
  },
  {
    key: "about",
    path: "/about",
    label: "About",
  },
  {
    key: "contact",
    path: "/contact",
    label: "Contact",
  },
];

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.common.white};
    padding: 25px 30px;
    display: block;
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    font-size: 20px;
    transition: all ${({ theme }) => theme.transitions.duration.standard} ${({ theme }) => theme.transitions.easing.sharp};
  }

  & > a:hover {
    background-color: ${({ theme }) => theme.palette.gray.A100};
    color: ${({ theme }) => theme.palette.common.black};
  }
`;

const Navbar: React.FC = () => {

    const theme = useContext(ThemeContext);

    const activeLink = {
        backgroundColor: theme.palette.gray.A100,
        color: theme.palette.common.black,
    };

    const nonActiveLink = {
        backgroundColor: "transparent",
        color: theme.palette.common.white,
    }

  return (
    <NavbarContainer>
      {menu.map((item) => (
        <NavLink style={({ isActive }) => isActive ? activeLink : nonActiveLink} to={item.path} key={item.key}>
          {item.label}
        </NavLink>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
