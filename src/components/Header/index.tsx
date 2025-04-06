import * as S from "./styles";
import { Dispatch } from "react";

interface ItemsProps {
  name: string;
  href: string;
  isLogged?: boolean;
}

interface HeaderProps {
  item: ItemsProps[];
  isLogged: boolean;
  setIsLogged: Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ item, isLogged, setIsLogged }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.NavContainer>
        {item
          .filter((i) => !i.isLogged || (i.isLogged && isLogged))
          .map((i) => (
            <S.NavItem key={i.name} href={i.href}>
              {i.name}
            </S.NavItem>
          ))}
      </S.NavContainer>

      <S.UserSection
        onClick={() => {
          //Simulado
          setIsLogged(!isLogged);
        }}
      >
        <S.UserIcon />
        <S.UserName>{isLogged ? "Sign out" : "Sign in"}</S.UserName>
      </S.UserSection>
    </S.HeaderContainer>
  );
};

export default Header;
