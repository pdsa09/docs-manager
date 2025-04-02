import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-bottom: 10px;
`;

export const NavLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.active ? "#0066cc" : "#333")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  display: block;
  padding: 8px 0;
  transition: all 0.2s;

  &:hover {
    color: #0066cc;
  }
`;
