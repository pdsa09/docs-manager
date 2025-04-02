import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Sidebar
        menuItems={[
          { text: "Home", path: "home" },
          { text: "About", path: "about" },
        ]}
      />
      <p>testes</p>
    </BrowserRouter>
  );
}

export default App;
