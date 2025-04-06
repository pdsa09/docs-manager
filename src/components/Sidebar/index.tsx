import * as S from "./styles";

interface SidebarProps {
  menuItems: { title: string; subItem: { text: string; path: string }[] }[];
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  return (
    <S.SidebarContainer>
      {menuItems.map((item, index) => (
        <S.NavList key={index}>
          <p>{item.title}</p>
          {item.subItem.map((subItem, subIndex) => (
            <S.NavItem key={`${index}-${subIndex}`}>
              <S.NavLink to={`/docs/${subItem.path}`}>{subItem.text}</S.NavLink>
            </S.NavItem>
          ))}
        </S.NavList>
      ))}
    </S.SidebarContainer>
  );
};

export default Sidebar;
