import { useState } from "react";
import { UserCredentials } from "../../store/user/types";
import LoginFormStyled from "./LoginFormStyled";
import Button from "../Button/Button";

interface LoginFormProps {
  handleOnSubmit: (userCredentials: UserCredentials) => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const actionOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    handleOnSubmit(userCredentials);
    setUserCredentials(initialUserCredentials);
  };

  const isReady =
    userCredentials.username !== "" && userCredentials.password !== "";

  return (
    <LoginFormStyled
      className="form"
      autoComplete="off"
      onSubmit={actionOnClick}
      noValidate
    >
      <div>
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          onChange={onChangeData}
          className="form__input"
          type="text"
          id="username"
          value={userCredentials.username}
        />
      </div>
      <div>
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          onChange={onChangeData}
          className="form__input"
          type="password"
          id="password"
          value={userCredentials.password}
        />
      </div>
      <div>
        <Button
          type="submit"
          className="form__button"
          disabled={!isReady}
          text="Login"
        />
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
