import * as S from "./styles";

interface SidebarProps {
  menuItems: { text: string; path: string }[];
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  return (
    <S.SidebarContainer>
      <h2>Documentation</h2>
      <S.NavList>
        {menuItems.map((item, index) => (
          <S.NavItem key={index}>
            <S.NavLink
              to={`/docs/${item.path}`}
              active={location.pathname === `/docs/${item.path}`}
            >
              {item.text}
            </S.NavLink>
          </S.NavItem>
        ))}
      </S.NavList>
    </S.SidebarContainer>
  );
};

export default Sidebar;
