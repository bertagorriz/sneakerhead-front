import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <h1 className="container__title">404</h1>
      <p className="container__subtitle">page not found</p>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
