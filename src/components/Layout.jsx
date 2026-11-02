import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Sidebar />
        <main className="content">
          {/* Suspense local: o layout continua visível enquanto a página carrega */}
          <Suspense fallback={<p className="loading">Carregando conteúdo...</p>}>
            {/* Outlet renderiza a página da rota atual dentro do layout */}
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}
