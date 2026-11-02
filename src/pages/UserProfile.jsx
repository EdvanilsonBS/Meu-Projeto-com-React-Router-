import { Link, useParams } from "react-router-dom";
import { users } from "../data/users";

export default function UserProfile() {
  // Lê o parâmetro :id definido na rota "user/:id"
  const { id } = useParams();
  const user = users.find((u) => u.id === id);

  if (!user) {
    return (
      <section>
        <h1>Usuário não encontrado</h1>
        <p>Não existe usuário com o ID <strong>{id}</strong>.</p>
        <Link to="/">Voltar para a Home</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{user.name}</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Cargo:</strong> {user.role}</p>
      <p><strong>Cidade:</strong> {user.city}</p>
      <p>{user.bio}</p>
      <Link to="/">Voltar para a Home</Link>
    </section>
  );
}
