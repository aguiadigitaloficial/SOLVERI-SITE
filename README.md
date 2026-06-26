# Solveri

Site institucional da Solveri, desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## Requisitos

- Node.js 20 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

O Vite exibira o endereco local no terminal, normalmente `http://localhost:5173/`.

No PowerShell com execucao de scripts desabilitada, use:

```powershell
npm.cmd install
npm.cmd run dev
```

## Rotas

As paginas do site usam URLs proprias:

- `/` - portal de entrada
- `/inicio` - pagina institucional da Solveri Group
- `/consult`
- `/response`
- `/academy`
- `/segmentos`
- `/contato`

As secoes internas da pagina inicial continuam usando ancoras, por exemplo:

- `/inicio#empresa`
- `/inicio#servicos`

Links antigos baseados em hash sao convertidos automaticamente para as novas rotas.

## Comandos

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Estrutura principal

- `src/App.tsx`: secoes, navegacao e conteudo das paginas
- `src/assets`: imagens e elementos visuais
- `src/index.css`: estilos globais e fontes
- `tailwind.config.ts`: configuracao visual do Tailwind
- `solveri-design-system.md`: referencia do sistema visual

## Build de producao

```bash
npm run build
```

Os arquivos finais sao gerados em `dist/`.

Como o projeto usa rotas no navegador, a hospedagem deve encaminhar acessos como
`/inicio`, `/consult` e `/academy` para o arquivo `index.html`. A configuracao exata depende
do provedor de hospedagem escolhido.

## SEO e deploy

O projeto esta preparado para deploy na Vercel com:

- `vercel.json` para fallback das rotas SPA.
- `public/robots.txt` e `public/sitemap.xml` para indexacao.
- `public/llms.txt` para resumo semantico do site para ferramentas de IA.
- metadados por rota, Open Graph, Twitter Card e JSON-LD no app.

Apos publicar, configure o dominio `solverigroup.com` na Vercel e envie
`https://solverigroup.com/sitemap.xml` no Google Search Console.
