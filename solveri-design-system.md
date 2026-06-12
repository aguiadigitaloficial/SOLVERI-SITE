# SOLVERI — Design System

Documento de referência para implementação do site Solveri Group. Stack alvo: React \+ Vite \+ TypeScript \+ Tailwind CSS. Tema: **dark** com verde neon de destaque. Extraído diretamente do Figma aprovado.

---

## 1\. Como usar este arquivo

Cole este documento como contexto base antes de pedir a construção de qualquer seção. Todos os valores (cores, fontes, raios, espaçamentos) são fixos e devem ser respeitados. Use os tokens (variáveis CSS / classes Tailwind) em vez de valores soltos.

---

## 2\. Cores

### Paleta principal (tema escuro)

| Token | Hex | Uso |
| :---- | :---- | :---- |
| `background` | `#0A0E0C` | Fundo base das seções escuras (aproximado da arte, confirmar no Figma se precisar do valor exato) |
| `surface` | `#1E2420` | Fundo de cards elevados (stat cards, caixas) |
| `surface-border` | `rgba(191,255,84,0.05)` | Borda sutil de cards no escuro |
| `foreground` | `#FFFFFF` | Títulos e textos de alto contraste |
| `muted-foreground` | `#B0B8B4` | Texto de corpo no escuro (parágrafos, legendas) |
| `accent` | `#A8E63D` | Verde de destaque: eyebrows, números de stats, ícones de check |
| `accent-bright` | `#D4FF00` | Verde neon do botão primário (CTA) |
| `accent-foreground` | `#0F2017` | Texto/ícone sobre o verde neon (verde quase preto) |

### Tokens para seções claras (ex.: bloco de clientes)

| Token | Hex | Uso |
| :---- | :---- | :---- |
| `light-foreground` | `#0F2017` | Texto principal sobre fundo claro |
| `light-muted` | `#5B5F5C` | Texto de corpo sobre fundo claro |

### Bordas e overlays

| Token | Valor | Uso |
| :---- | :---- | :---- |
| `border-on-dark` | `rgba(255,255,255,0.32)` | Borda do botão vazado (outline) |
| `pill-border` | `rgba(191,255,84,0.05)` a `0.12` | Borda das pills ESG |

---

## 3\. Tipografia

### Fontes

- **Exo 2** (Google Fonts) → títulos, eyebrows, números de stats, botões. Observação: a arte referencia tanto "Exo" quanto "Exo 2". Use **Exo 2** como padrão (é a família completa no Google Fonts). Se preferir "Exo", me avise.  
- **Poppins** (Google Fonts) → todo o texto de corpo.

Import (index.html):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&family=Poppins:wght@400;500&display=swap" rel="stylesheet">
```

### Escala tipográfica

| Estilo | Fonte | Peso | Tamanho | Line-height | Letter-spacing | Caso | Cor |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| H1 (hero) | Exo 2 | 700 | 44px | 1.2 | 0 | normal | `#FFFFFF` |
| H2 (título de seção) | Exo 2 | 700 | 36px | 1.2 | 0 | normal | `#FFFFFF` |
| H3 (título de card/serviço) | Exo 2 | 700 | 24-28px | 1.25 | 0 | normal | `#FFFFFF` |
| Eyebrow / label | Exo 2 | 700 | 12px | 18px | 2px | UPPERCASE | `#A8E63D` |
| Stat number | Exo 2 | 700 | 32-48px | 1.0 | 0 | normal | `#A8E63D` |
| Body large | Poppins | 400 | 20px | 1.5 | 0 | normal | `#B0B8B4` |
| Body / caption | Poppins | 400 | 14px | 20px | 0 | normal | `#B0B8B4` |
| Botão (texto) | Exo 2 | 700 | 12px | 1.0 | 0.52px | UPPERCASE | varia |

---

## 4\. Espaçamento, raios, sombras

### Border radius

| Token | Valor | Uso |
| :---- | :---- | :---- |
| `radius-button` | `5px` | Botões |
| `radius-card` | `8px` | Stat cards e caixas pequenas |
| `radius-lg` | `12px` a `16px` | Cards de depoimento e blocos maiores |

### Efeitos

- **Backdrop blur** dos stat cards: `6px` (`backdrop-blur-[6px]`).  
- **Sombra** dos cards de depoimento: sombra suave (`shadow-lg` discreto). Confirmar intensidade exata no Figma se necessário.

### Grid / containers

- Largura útil do conteúdo: \~`1344px` (container central), com padding lateral.  
- Gap padrão entre botões: `30px`.  
- Gap interno de cards: `24px`.

---

## 5\. Componentes

### Botão primário (CTA verde neon)

- Fundo: `#D4FF00`  
- Texto: `#0F2017`, Exo 2 Bold 12px, UPPERCASE, letter-spacing `0.52px`  
- Altura: `50px` / largura mínima `260px`  
- Radius: `5px`  
- Sem borda

### Botão secundário (vazado)

- Fundo: transparente  
- Borda: `1px solid rgba(255,255,255,0.32)`  
- Texto: branco, Exo 2 SemiBold 13px, letter-spacing `0.52px`  
- Altura: `50px`, radius `5px`

### Eyebrow / label de seção

- Texto curto em UPPERCASE  
- Exo 2 Bold 12px, letter-spacing `2px`, cor `#A8E63D`  
- Aparece acima de cada título de seção (ex.: "A EMPRESA", "SERVIÇOS", "FAQ")

### Stat card

- Fundo: `#1E2420`, radius `8px`, borda `rgba(191,255,84,0.05)`, backdrop-blur `6px`  
- Padding horizontal: `25px`  
- Número: Exo 2 Bold 32px, cor `#A8E63D`  
- Legenda: Poppins Regular 14px, cor `#B0B8B4`

### Card de depoimento

- Fundo escuro elevado com sombra suave, radius `12-16px`  
- Linha de estrelas (ícones) no topo, cor de destaque  
- Citação: Poppins Regular, cor `#B0B8B4`  
- Nome do autor \+ fonte (ex.: "Google") no rodapé do card  
- Grid de 3 colunas no desktop

### Pill (ESG)

- Cápsula com borda `rgba(191,255,84,0.05-0.12)`, radius alto (formato pílula)  
- Texto: Poppins/Exo, padding `8px 17px`, altura \~`35px`

### Item de lista com check (serviços)

- Marcador: quadradinho `8x8px` verde (`#A8E63D` / `#D4FF00`), radius pequeno  
- Texto à direita: Poppins/Exo 14-20px, cor clara  
- Layout em duas colunas

### Accordion (FAQ)

- Itens empilhados, altura \~`81px` cada  
- Pergunta à esquerda \+ ícone de toggle (`+` / `−`) à direita  
- Divisória sutil entre itens

### Navbar

- Logo Solveri à esquerda (versão horizontal)  
- Links centrais: Início, Consult, Response, Academy, Segmentos, Contato  
- Botão "Fale Conosco" à direita (estilo CTA)  
- Altura: `80px`, fundo transparente sobre o hero

### Footer

- Fundo escuro, 4 colunas: Marca / Navegação / Serviços / Contato  
- Logo \+ descrição curta \+ ícones sociais na coluna 1  
- Divisória \+ barra inferior: copyright à esquerda, "Desenvolvido por Águia Digital" ao centro, links legais à direita

---

## 6\. Snippets prontos

### `index.css` (variáveis)

```css
:root {
  --background: 150 18% 5%;        /* #0A0E0C aprox */
  --surface: 150 9% 13%;           /* #1E2420 */
  --foreground: 0 0% 100%;         /* #FFFFFF */
  --muted-foreground: 150 6% 70%;  /* #B0B8B4 */
  --accent: 84 73% 57%;            /* #A8E63D */
  --accent-bright: 71 100% 50%;    /* #D4FF00 */
  --accent-foreground: 150 38% 9%; /* #0F2017 */
  --radius: 0.5rem;
}
```

### `tailwind.config.ts` (extend)

```ts
export default {
  theme: {
    extend: {
      colors: {
        background: "#0A0E0C",
        surface: "#1E2420",
        foreground: "#FFFFFF",
        "muted-foreground": "#B0B8B4",
        accent: "#A8E63D",
        "accent-bright": "#D4FF00",
        "accent-foreground": "#0F2017",
      },
      fontFamily: {
        heading: ['"Exo 2"', "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        button: "5px",
        card: "8px",
      },
    },
  },
};
```

---

## 7\. Estrutura de seções da home (ordem da arte)

1. Hero (navbar \+ título \+ 2 CTAs \+ contadores \+ nav de unidades)  
2. Quem somos (texto \+ vídeo \+ stats \+ credenciamentos)  
3. Clientes (bloco com logos)  
4. Serviços (Consult, Response, Academy — 3 blocos)  
5. ESG (texto \+ pills \+ imagem)  
6. Atuação / Presença nacional (mapa \+ lista \+ stat)  
7. Parceiros  
8. FAQ (accordion \+ CTA box)  
9. Depoimentos (grid de cards \+ CTA Google)  
10. Rodapé

