import { useNavigate } from "react-router-dom";
import SneakerForm from "../../components/SneakerForm/SneakerForm";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import AddSneakerPageStyled from "./AddSneakerPageStyled";
import { addSneakersActionCreator } from "../../store/sneakers/sneakersSlice";
import paths from "../../routers/paths/paths";
import { SneakerAddStructure } from "../../store/sneakers/types";

const AddSneakerPage = (): React.ReactElement => {
  const { addSneaker } = useApi();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (sneakerData: SneakerAddStructure) => {
    try {
      const newSneaker = await addSneaker(sneakerData);

      dispatch(addSneakersActionCreator(newSneaker));

      navigate(paths.home);
    } catch {
      return;
    }
  };
  return (
    <AddSneakerPageStyled>
      <h1 className="newOne-title">New One</h1>
      <SneakerForm handleOnSubmit={onSubmit} />
    </AddSneakerPageStyled>
  );
};

export default AddSneakerPage;
