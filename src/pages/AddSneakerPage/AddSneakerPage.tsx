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
    const newSneaker = await addSneaker(sneakerData);

    if (newSneaker) {
      dispatch(addSneakersActionCreator(newSneaker));

      navigate(paths.home);
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
