# Site com React Router

Projeto React (Vite) que demonstra o uso do React Router v6.

## Como executar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
```

## O que foi implementado

- **Configuração do Router**: `BrowserRouter` em `src/main.jsx`.
- **Páginas**: Home, About, Contact (`src/pages`), cada uma com links para as outras.
- **Rotas e Links**: `Routes`/`Route` em `src/App.jsx`; navegação com `Link` e `NavLink`.
- **Layout compartilhado**: `Header`, `Sidebar` e `Footer` em `src/components`, renderizados em `Layout` com `<Outlet />`.
- **Lazy loading**: `React.lazy` + `Suspense` carregam cada página sob demanda.
- **Rota inválida**: `path="*"` exibe a página 404.
- **Parâmetro de URL**: `/user/:id` usa `useParams` para exibir o perfil (IDs 1, 2 e 3).
- **Header**: links para Home, About e Contact, com destaque da rota ativa.
