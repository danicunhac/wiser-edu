import { User } from "./types";

export function addUser(user: User) {
  return {
    type: "ADD_USER",
    payload: {
      user,
    },
  };
}
