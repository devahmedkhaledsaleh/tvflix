import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import ShowPage from "./pages/ShowPage";
import Header from "./components/layout/Header";
import { ShowsContextProvider } from "./context/ShowsContext";
import { AlertContextProvider } from "./context/AlertContext";

function App() {
  return (
    <BrowserRouter>
      <AlertContextProvider>
        <ShowsContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/shows/:id" element={<ShowPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ShowsContextProvider>
      </AlertContextProvider>
    </BrowserRouter>
  );
}

export default App;
