Vantagens e desvantagens
Roteamento
O que é roteamento?
Como funciona no NextJS?
Como criar rotas?
Server-side rendering
O que é server-side rendering?
Como funciona no NextJS?
Vantagens e desvantagens
Static site generation
O que é static site generation?
Como funciona no NextJS?
Vantagens e desvantagens
Dicas:

Explique a importância do NextJS para a construção de aplicações web mais complexas.
Mostre exemplos de como o roteamento funciona e como ele pode ser utilizado na prática.
Mostre também exemplos de como o server-side rendering e o static site generation podem melhorar a experiência do usuário e a performance da aplicação.
Ao final da apresentação, dê um tempo para perguntas e esclarecimentos.

React é uma biblioteca JavaScript de código aberto amplamente utilizada para construir interfaces de usuário (UI) interativas e responsivas. O React fornece e permite a criação de componentes reutilizáveis que podem ser combinados de diferentes formas a fim de criar interfaces complexas de maneira eficiente.

# NextJS

## O que é NextJS?
Diferentemente do React, que se trata de uma biblioteca, o Next é um framework que fornece uma estrutura de desenvolvimento completa para a construção de aplicativos web escaláveis e otimizados. O Next expande as funcionalidades do React, adicionando recursos como:

  - Sistema de roteamento
  - Servidor Node entre o Front-end e o Back-end da aplicação
  - Conteúdo gerado no servidor e entregue pronto ao usuário (SSR)
  - Otimização de desempenho e muitos outros recursos

### Framework x Biblioteca:

Uma biblioteca é um conjunto de ferramentas desenvolvidas para resolver problemas e tarefas comuns em diferentes projetos. Os desenvolvedores têm a liberdade de escolher quais componentes utilizarão e como o farão, garatindo maior flexibilidade.

Por outro lado, um framework é uma estrutura rígida de desenvolvimento que define uma arquitetura para o projeto através de um conjunto de bibliotecas, ferramentas e padrões integrados. Em troca de ter a arquitetura do projeto pronta, os desenvolvedores não possuem tanta flexibilidade e trabalham dentro das limitações e convenções do framework.

## Quais problemas ele resolve?
   
   O React é uma ótima ferramenta para o desenvolvimento de aplicações web, no entanto, sozinho, possui algumas limitações. Grande parte dessas limitações são solucionadas com o Next, como por exemplo:
   
   - Roteamento: O React puro não fornece uma solução de roteamento integrada, o que significa que é necessário implementar seu próprio sistema ou usar bibliotecas de terceiros. O Next oferece um sistema de roteamento simples e intuitivo, permitindo a criação de rotas de forma mais fácil e organizada.

  - Diferentes formas de renderização: O React puro é tipicamente renderizado do lado do cliente (Client Side Rendering - CSR), o que significa que o código JavaScript é executado no navegador do usuário. Isso pode resultar em atrasos perceptíveis ao carregar a página inicialmente. O Next oferece a renderização do lado do servidor (Server Side Rendering - SSR) como padrão, que permite que as páginas sejam renderizadas no servidor antes de serem enviadas para o cliente, resultando em tempos de carregamento mais rápidos. Além do SSR o Next também possui Static Site Generation (SSG), Incremental Static Regeneration (ISR) e o próprio Client Side Rendering.
  
  - Otimizações de desempenho: O Next.js possui recursos integrados de otimização de desempenho, como carregamento de código assíncrono, divisão automática de código e dimensionamento de imagens. Essas otimizações ajudam a melhorar a velocidade de carregamento e a eficiência do aplicativo.


Geração de páginas estáticas: O Next.js permite a geração de páginas estáticas, o que é útil para conteúdo que não muda com frequência. Isso melhora ainda mais o desempenho, pois as páginas estáticas podem ser servidas de um cache sem a necessidade de processamento no servidor em cada solicitação.

Pré-renderização: O Next.js oferece a capacidade de pré-renderizar páginas sob demanda ou em tempo de compilação. Isso significa que as páginas podem ser renderizadas antecipadamente, reduzindo o tempo de carregamento e melhorando a experiência do usuário.



```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
