import * as S from "./styles";

interface ItemsProps {
  name: string;
  href: string;
}

interface HeaderProps {
  item: ItemsProps[];
}

const Header = ({ item }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.NavContainer>
        {item.map((i) => (
          <S.NavItem key={i.name} href={i.href}>
            {i.name}
          </S.NavItem>
        ))}
      </S.NavContainer>

      <S.UserSection>
        <S.UserIcon />
        <S.UserName title="Em manutenção">Sign in</S.UserName>
      </S.UserSection>
    </S.HeaderContainer>
  );
};

export default Header;
