import { changeTheme } from "./store";
import { useAppConfig } from "./hooks";

export default function Child() {
  const [config, dispatch] = useAppConfig();

  return (
    <div
      style={{
        backgroundColor: config.theme === "light" ? "#fff" : "#000",
        color: config.theme === "light" ? "#000" : "#fff",
      }}
    >
      Hi 1<button onClick={() => dispatch(changeTheme())}>Change theme</button>
    </div>
  );
}
