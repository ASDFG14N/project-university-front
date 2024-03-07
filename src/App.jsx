import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import AnimesPage from "./pages/AnimesPage";
import PeliculasPage from "./pages/PeliculasPage";
import PopularesPage from "./pages/PopularesPage";
import AcercaDePage from "./pages/AcercaDePage";
import Watch from "./pages/Watch";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { AnimeProvider } from "./context/AnimeContext";

import "./index.css";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <AuthProvider>
      <AnimeProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminPage />}></Route>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/animes" element={<AnimesPage />}></Route>
              <Route path="/peliculas" element={<PeliculasPage />}></Route>
              <Route path="/populares" element={<PopularesPage />}></Route>
              <Route path="/about" element={<AcercaDePage />}></Route>
              <Route path="/watch/:id" element={<Watch />}></Route>
            </Route>
          </Routes>
        </Router>
      </AnimeProvider>
    </AuthProvider>
  );
}

export default App;
