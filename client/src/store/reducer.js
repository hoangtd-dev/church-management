import { CHANGE_THEME } from "./constants";

const initialAppConfig = { theme: "light" };

const appConfigReducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export { initialAppConfig };
export default appConfigReducer;
