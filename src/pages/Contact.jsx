import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section>
      <h1>Contato</h1>
      <p>Entre em contato pelo e-mail: <strong>edvanilsobezerra3@gmail.com</strong></p>
      <p>
        Veja também a página <Link to="/about">Sobre</Link> ou volte para a{" "}
        <Link to="/">Home</Link>.
      </p>
    </section>
  );
}
