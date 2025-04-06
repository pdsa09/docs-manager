import * as S from "./styles";
import notFoundImage from "../../assets/not-found.png";

const NotFound = () => {
  return (
    <S.NotFoundContainer>
      <S.Image src={notFoundImage} alt="Página não encontrada" />
      <S.Title>Conteúdo não encontrado</S.Title>
      <S.Description>Ocorreu um erro ao buscar este conteúdo.</S.Description>
      <S.HomeLink to="/">Voltar à página inicial</S.HomeLink>
    </S.NotFoundContainer>
  );
};

export default NotFound;
