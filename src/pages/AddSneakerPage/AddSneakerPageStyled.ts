import styled from "styled-components";

const AddSneakerPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 272px;

  .newOne-title {
    display: flex;
    align-items: center;
    padding-left: 8px;
    margin-top: 24px;
    margin-bottom: 32px;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.title};
    font-weight: 600;
    background-color: ${(props) => props.theme.color.primary};
    border: 0.8px solid ${(props) => props.theme.color.text};
    height: 40px;
  }
`;

export default AddSneakerPageStyled;
