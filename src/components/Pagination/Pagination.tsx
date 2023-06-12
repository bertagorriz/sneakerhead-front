import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button
        className="pagination"
        ariaLabel="pagination"
        text="Load more ..."
      />
    </PaginationStyled>
  );
};

export default Pagination;
