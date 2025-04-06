import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import { DocumentsProvider } from "./contexts/DocumentsContext";
import Sidebar from "./components/Sidebar";
import DocumentView from "./views/Documents";
import AdminView from "./views/Admin";
import { HeaderItems, sidebarList } from "./utils/utils";
import Header from "./components/Header";

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const App: React.FC = () => {
  return (
    <DocumentsProvider>
      <Router>
        <Header item={HeaderItems} />
        <AppContainer>
          <Sidebar menuItems={sidebarList} />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/docs/homepage.md" replace />}
            />
            <Route path="/docs/*" element={<DocumentView />} />
            <Route path="/admin" element={<AdminView />} />
            <Route
              path="*"
              element={<Navigate to="/docs/homepage.md" replace />}
            />
          </Routes>
        </AppContainer>
      </Router>
    </DocumentsProvider>
  );
};

export default App;
