import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { SneakerStructure } from "../../store/sneakers/types";

const sneakersFactory = Factory.define<SneakerStructure>(() => ({
  id: faker.string.alphanumeric({ length: 24 }),
  name: faker.person.firstName(),
  brand: faker.company.name(),
  image: faker.image.url(),
  price: faker.number.int({ min: 80, max: 400 }),
  colors: faker.helpers.arrayElements([
    "Grey",
    "White",
    "Black",
    "Green",
    "Red",
  ]),
  features: {
    description: faker.commerce.productDescription(),
    isAvailable: faker.datatype.boolean(),
  },
  user: faker.database.mongodbObjectId().toString(),
}));

export const getSneakersDataMock = (
  howMany: number,
  data?: Partial<SneakerStructure>
) => sneakersFactory.buildList(howMany, data);
