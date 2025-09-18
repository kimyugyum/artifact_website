import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <NavBar>
      <NavMenu>
        <NavItem><StyledLink to="/">HOME</StyledLink></NavItem>
        <NavItem><StyledLink to="/work">WORK</StyledLink></NavItem>
        <NavItem><StyledLink to="/artists">ARTISTS</StyledLink></NavItem>
        <NavItem><StyledLink to="/about">ABOUT</StyledLink></NavItem>
      </NavMenu>
    </NavBar>
  );
}

const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: -90px;
  width: 100%;
  padding: 20px 40px;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
`;

const NavItem = styled.li`
  font-size: 14px;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 2px solid white;
    padding-bottom: 2px;
  }
`;
