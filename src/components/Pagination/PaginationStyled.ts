import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 19px;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.color.primary};
  width: 100%;
  border-radius: 35px;
  border: 0.8px solid ${(props) => props.theme.color.text};

  .pagination {
    text-transform: uppercase;
    font-weight: ${(props) => props.theme.fontWeight.weight600};
    background-color: ${(props) => props.theme.color.primary};
  }
`;

export default PaginationStyled;
