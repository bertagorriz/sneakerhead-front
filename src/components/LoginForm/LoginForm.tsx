import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled className="form" autoComplete="off" noValidate>
      <div>
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input className="form__input" type="text" id="username" />
      </div>
      <div>
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input className="form__input" type="password" id="password" />
      </div>
      <div>
        <button type="submit" className="form__button">
          Login
        </button>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
