import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AddSneakerPage from "./AddSneakerPage";
import { SneakerStructure } from "../../store/sneakers/types";
import { getSneakerDataMock } from "../../mocks/factories/sneakersFactory";
import paths from "../../routers/paths/paths";
import SneakerListPage from "../SneakerListPage/SneakerListPage";

describe("Given an AddSneakerPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a H1 with 'New One' text", () => {
      const expectedText = "New One";

      renderWithProviders(wrapWithRouter(<AddSneakerPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user adds a new sneaker", () => {
    test("Then it should show a heding with 'HOME' text", async () => {
      const expectedText = "Home";
      const sneakerMockDetails: SneakerStructure = getSneakerDataMock({
        name: "990v5",
        brand: "New Balance",
        image: "Model 990v5 from New Balance",
      });

      const nameLabel = /model/i;
      const brandLabel = /brand/i;
      const imageLabel = /image url/i;
      const priceLabel = /price €/i;
      const descriptionLabel = "Description";
      const buttonText = /add/i;

      const redLabel = /red/i;

      const nameText = sneakerMockDetails.name;
      const imageText = sneakerMockDetails.image;
      const priceText = "10";
      const descriptionText = sneakerMockDetails.features.description;

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <AddSneakerPage />,
        },
        {
          path: paths.home,
          element: <SneakerListPage />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await userEvent.type(screen.getByLabelText(nameLabel), nameText);

      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Nike",
      ]);

      await userEvent.type(screen.getByLabelText(imageLabel), imageText);

      await userEvent.type(screen.getByLabelText(priceLabel), priceText);

      await userEvent.click(screen.getByLabelText(redLabel));

      await userEvent.type(
        screen.getByLabelText(descriptionLabel),
        descriptionText
      );

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
