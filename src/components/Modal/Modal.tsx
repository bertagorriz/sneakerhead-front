import { useAppDispatch, useAppSelector } from "../../store";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

const Modal = (): React.ReactElement => {
  const { isError, message } = useAppSelector((state) => state.uiStore);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(hideFeedbackActionCreator());
  };

  return (
    <ModalStyled>
      <div className={`modal modal${isError ? "--wrong" : "--correct"}`}>
        <Button
          className="modal__close"
          ariaLabel="close"
          actionOnClick={onClose}
        >
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2879 15.2813L29.5926 0.614063C29.7988 0.370313 29.6254 0 29.3066 0H25.566C25.3457 0 25.1347 0.0984374 24.9894 0.267187L14.841 12.3656L4.69256 0.267187C4.55194 0.0984374 4.341 0 4.116 0H0.375376C0.0566258 0 -0.116812 0.370313 0.089438 0.614063L12.3941 15.2813L0.089438 29.9484C0.0432361 30.0028 0.0135958 30.0692 0.00403501 30.1399C-0.00552577 30.2106 0.00539452 30.2825 0.0355005 30.3472C0.0656066 30.4118 0.113634 30.4665 0.173879 30.5046C0.234124 30.5428 0.304057 30.5629 0.375376 30.5625H4.116C4.33631 30.5625 4.54725 30.4641 4.69256 30.2953L14.841 18.1969L24.9894 30.2953C25.1301 30.4641 25.341 30.5625 25.566 30.5625H29.3066C29.6254 30.5625 29.7988 30.1922 29.5926 29.9484L17.2879 15.2813Z"
              fill="black"
            />
          </svg>
        </Button>
        <span className="modal__text" title="modal">
          {message}
        </span>
      </div>
    </ModalStyled>
  );
};

export default Modal;
