import { ChangeSort } from "../actions/sort";

const InitialState = {
  sort: "old",
};

export default function posts(state = InitialState, action) {
  switch (action.type) {
    // Update the sort parameter in the state based on the ChangeSort action.
    case ChangeSort:
      return {
        ...state,
        sort: action.sort,
      };

    default:
      return state;
  }
}
