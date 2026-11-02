import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Bem-vindo à Home</h1>
      <p>
        Este é um site de exemplo criado para praticar o React Router: rotas,
        layout compartilhado, lazy loading, parâmetros de URL e página 404.
      </p>
      <p>Navegue para outras páginas:</p>
      <ul>
        <li><Link to="/about">Ir para Sobre</Link></li>
        <li><Link to="/contact">Ir para Contato</Link></li>
        <li><Link to="/user/1">Ver perfil do usuário 1</Link></li>
        <li><Link to="/pagina-inexistente">Testar uma rota inválida (404)</Link></li>
      </ul>
    </section>
  );
}
