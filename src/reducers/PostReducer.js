import { v4 as uuidv4 } from "uuid";
import Faker from "faker";

export const PostReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          userName: action.post.userName,
          text: action.post.text,
          image: Faker.internet.avatar(),
          id: uuidv4().slice(0, 5),
        },
      ];

    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.id);

    default:
      return state;
  }
};
