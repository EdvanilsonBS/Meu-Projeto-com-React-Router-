import { Link } from "react-router-dom";

export default function About() {
  return (
    <section>
      <h1>Sobre</h1>
      <p>
        Este projeto demonstra como organizar uma aplicação React com múltiplas
        páginas usando o React Router v6, com páginas carregadas sob demanda.
      </p>
      <p>
        Voltar para <Link to="/">Home</Link> ou falar conosco na página de{" "}
        <Link to="/contact">Contato</Link>.
      </p>
    </section>
  );
}
