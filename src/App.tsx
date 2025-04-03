import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Admin from "./views/Admin";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "1rem",
        }}
      >
        <Sidebar
          menuItems={[
            { text: "Home", path: "home" },
            { text: "About", path: "about" },
          ]}
        />
        <Admin />
      </div>
    </BrowserRouter>
  );
}

export default App;
