import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um Atomo e React Avancado escrito ao lado"
    />
    <S.Title>React Avancado</S.Title>
    <S.Description>
      Typescript, ReactJS NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para a tela com codigo"
    />
  </S.Wrapper>
)

export default Main
