import { NavLink } from "react-router-dom";
import { users } from "../data/users";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Usuários</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
