import SneakerForm from "../../components/SneakerForm/SneakerForm";
import AddSneakerPageStyled from "./AddSneakerPageStyled";

const AddSneakerPage = (): React.ReactElement => {
  return (
    <AddSneakerPageStyled>
      <h1 className="newOne-title">New One</h1>
      <SneakerForm />
    </AddSneakerPageStyled>
  );
};

export default AddSneakerPage;
