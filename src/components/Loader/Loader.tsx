import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <span className="loader" title="loader" />
    </LoaderStyled>
  );
};

export default Loader;
