import { useContext } from "react";
import { StoreContext } from "../context";

export function useAppConfig() {
  return useContext(StoreContext);
}
