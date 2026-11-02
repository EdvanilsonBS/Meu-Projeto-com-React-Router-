import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Lazy loading: cada página vira um "chunk" separado,
// carregado somente quando a rota é visitada.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Loading() {
  return <p className="loading">Carregando página...</p>;
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Rota de layout: Header, Sidebar e Footer aparecem em todas as páginas filhas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Rota com parâmetro de URL */}
          <Route path="user/:id" element={<UserProfile />} />
          {/* Rota coringa: qualquer URL inválida cai aqui */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
