import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: #e9f2ff;
  padding: 20px;
  height: 100vh;
  position: fixed;
  top: 1;
  left: 0;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
  p {
    margin: 0px;
    color: #344054ff;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const NavItem = styled.li`
  padding: 8px 0;
`;

export const NavLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  font-size: 14px;
  color: #44546f;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  display: block;
  transition: all 0.2s;

  &:hover {
    color: #0066cc;
  }
`;
