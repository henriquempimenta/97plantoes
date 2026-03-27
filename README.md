# 97plantões — Landing Page

Site institucional da **97plantões**, a plataforma de plantões médicos do Brasil.

> *Conectando a Saúde do Brasil.*

## Stack

- **React 19** + **TypeScript**
- **Vite 6** — bundler e dev server
- **Tailwind CSS 4** — estilos utilitários
- **TanStack Query** — gerenciamento de estado

## Estrutura

```
/
├── apps/
│   └── web/
│       ├── components/
│       │   └── LandingPage.tsx   # Página principal
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
├── packages/
│   └── core/                     # Lógica de negócio compartilhável
│       ├── api.ts
│       ├── database.ts
│       ├── types.ts
│       └── hooks/
├── public/                       # Assets estáticos
│   ├── logo.svg

│   ├── doctor_using_the_app.jpg
│   └── NoveSeteVideo.mp4
├── index.html
├── vite.config.ts
└── package.json
```

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # build de produção em dist/
npm run preview   # preview do build de produção
```

## Deploy (GitHub Pages)

O deploy é feito automaticamente via GitHub Actions a cada push na branch `main`.

O workflow (`.github/workflows/deploy.yml`) executa:
1. `npm ci`
2. `npm run build`
3. Publica a pasta `dist/` na branch `gh-pages`

**Configuração inicial no GitHub:**
1. Faça push do repositório para o GitHub.
2. Vá em **Settings → Pages** e defina o source como a branch **`gh-pages`**.
3. O site ficará disponível em `https://<seu-usuario>.github.io/n97plantoes/`.

## Identidade Visual

| Cor | HEX | Uso |
|---|---|---|
| Ciano Plantonista | `#55BCCD` | Predominante (30%) |
| Vermelho Médico | `#E13444` | Destaque (10%) |
| Branco Hospitalar | `#FFFFFF` | Fundo (60%) |
| Azul | `#1C5A90` | Auxiliar |

Fonte institucional: **Inter** (normal, semibold, bold).
