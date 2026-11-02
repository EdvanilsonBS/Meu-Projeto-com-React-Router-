import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="not-found">
      <h1>404</h1>
      <p>
        A página <code>{pathname}</code> não existe.
      </p>
      <Link to="/">Voltar para a Home</Link>
    </section>
  );
}
