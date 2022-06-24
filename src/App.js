import "./App.css";
import Main from "./components/Main";
import { GlobalProvider } from "./context/GlobalContext";

export default function App() {
  return (
      <GlobalProvider>
        <Main />
      </GlobalProvider>
  );
}
