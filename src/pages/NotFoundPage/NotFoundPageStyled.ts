import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 272px;
  height: -webkit-fill-available;
  padding: 90px 0 90px 0;
  text-align: center;

  .container {
    &__title {
      font-size: 130px;
      font-weight: ${(props) => props.theme.fontWeight.weight800};
      color: ${(props) => props.theme.color.primary};
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }

    &__subtitle {
      font-size: 46px;
      text-transform: uppercase;
      font-weight: ${(props) => props.theme.fontWeight.weight800};
      color: ${(props) => props.theme.color.primary};
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }
  }
`;

export default NotFoundPageStyled;
