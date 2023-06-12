import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  actionOnClick: () => void;
}

const Pagination = ({ actionOnClick }: PaginationProps): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button
        className="pagination"
        ariaLabel="pagination"
        text="Load more ..."
        actionOnClick={actionOnClick}
      />
    </PaginationStyled>
  );
};

export default Pagination;
