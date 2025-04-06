import styled from "styled-components";
import { FaUser } from "react-icons/fa";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  top: 0;
  position: sticky;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.a`
  color: #555;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  align-self: end;
  gap: 0.5rem;
  cursor: not-allowed;
`;

export const UserIcon = styled(FaUser)`
  font-size: 1.2rem;
  color: #555;
`;

export const UserName = styled.span`
  font-weight: 500;
`;
