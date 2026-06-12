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

As areas do site sao acessadas por hash:

- `/#inicio`
- `/#consult`
- `/#response`
- `/#academy`
- `/#segmento`
- `/#contato`

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
