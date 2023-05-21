# NextJS
## Introdução
Como vimos anteriormente, React é uma biblioteca JavaScript de código aberto amplamente utilizada para construir interfaces de usuário (UI) interativas e responsivas. O React fornece e permite a criação de componentes reutilizáveis que podem ser combinados de diferentes formas a fim de criar interfaces complexas de maneira eficiente.

## O que é NextJS?
Diferentemente do React, que se trata de uma biblioteca, o Next é um framework que fornece uma estrutura de desenvolvimento completa para a construção de aplicativos web escaláveis e otimizados e expande as funcionalidades do React. Os recursos fundamentais do Next são apresentados a seguir.

### Framework x Biblioteca:

Uma biblioteca é um conjunto de ferramentas desenvolvidas para resolver problemas e tarefas comuns em diferentes projetos. Os desenvolvedores têm a liberdade de escolher quais componentes utilizarão e como o farão, garatindo maior flexibilidade.

Por outro lado, um framework é uma estrutura rígida de desenvolvimento que define uma arquitetura para o projeto através de um conjunto de bibliotecas, ferramentas e padrões integrados. Em troca de ter a arquitetura do projeto pronta, os desenvolvedores não possuem tanta flexibilidade e trabalham dentro das limitações e convenções do framework.

## Quais problemas ele resolve?
   
   O React é uma ótima ferramenta para o desenvolvimento de aplicações web, no entanto, sozinho, possui algumas limitações. Grande parte dessas limitações são solucionadas com o Next, como, por exemplo:
   
   ### Roteamento: 
   O React puro não fornece uma solução de roteamento integrada, o que significa que é necessário implementar seu próprio sistema ou usar bibliotecas de terceiros. O Next oferece um sistema de roteamento simples e intuitivo, permitindo a criação de rotas de forma mais fácil e organizada.

  ### Diferentes formas de renderização: 
  Tipicamente, em um projeto React puro, o Front-end e o Back-end são conectados diretamente, fazendo com que o conteúdo seja renderizado do lado do cliente (Client Side Rendering - CSR), pois depende do código JavaScript, que é executado no navegador do usuário. Consequentemente todo o HTML gerado através do JSX também é gerado somente no navegador do usuário, resultando em alguns problemas, por exemplo, atrasos perceptíveis ao carregar a página. 
  
  o Next, em 2016, solucionou esse problema. Ele possui um servidor Node entre o Front-end e o Back-end da aplicação, possibilitando a renderização do lado do servidor (Server Side Rendering - SSR) como padrão. Esse modelo de geração não é uma novidade para a época e já era algo comum em PHP, por exemplo, no entanto, unindo o Node com o React, é possível renderizar as páginas e todo o HTML básico no servidor, antes de serem enviadas para o cliente, resultando em tempos de carregamento mais rápidos. Além do SSR o Next também possibilita o próprio CSR, Static Site Generation (SSG) e Incremental Static Regeneration (ISR), que serão comentados conforme necessário.
  
  ### Otimizações de desempenho: 
  O Next também possui recursos integrados de otimização de desempenho, como carregamento de código assíncrono, divisão automática de código e dimensionamento de imagens. Essas otimizações ajudam a melhorar a velocidade de carregamento e a eficiência do aplicativo.

## Algumas desvantagens

  O Next adiciona uma camada de complexidade em relação ao React puro, sendo necessário aprender sua arquitetura, como roteamento, renderização do lado do servidor (SSR) e geração de páginas estáticas (SSG). Isso pode exigir algum tempo para se familiarizar, aumentando a curva de aprendizado inicial.

  O Next é um framework que oferece muitos recursos integrados. No entanto, se o seu projeto não precisa de todas essas funcionalidades, pode haver uma sobrecarga de recursos desnecessários, aumentando a complexidade do projeto, o tamanho do pacote e o tempo de inicialização do aplicativo.

  O uso do Next significa depender do ecossistema específico dessa ferramenta. Isso pode significar ficar limitado às versões e atualizações, o que pode causar problemas de compatibilidade, atrasos em obter novos recursos ou correções de bugs.

  No entanto, como a própria documentação do React não recomenda mais a criação de um projeto puro, com `create-react-app`, as duas últimas desvantagens não são próprias do Next e se aplicam a quase qualquer framework baseado em React.
  
  
## Criação do projeto
  
  A seguir iremos detalhar de forma mais prática como trabalhar com o Next, iniciando pela criação e execução do projeto.
  
  Para iniciar o projeto, dirija-se a pasta desejada, abra o terminal e rode o comando:
  
```bash
npx create-next-app@latest --typescript [nome-do-projeto]
# ou
yarn create next-app --typescript [nome-do-projeto]

# Obs: não é necessário utilizar typescript, no entando muito recomendado
```
  Caso encontre dificuldades para abrir o terminal na pasta desejada, existem duas opções:
  
  1) Abra a barra de pesquisa do Windows e digite "cmd", o terminal irá abrir. Então digite `cd [caminho-da-pasta]`.
  2) Vá na pasta desejada, clique com o botão direito e selecione "abrir com code", o vscode abrirá. Em seguida aperte ctrl + ' para abrir o terminal integrado do vscode.

  Logo em seguida apareceram algumas perguntas, é recomendado aceitar todos padrões exceto o Tailwind, por agora. Em seguida, digite `code [nome-do-projeto]` para abrir a pasta criada com o vscode. Não utilizaremos mais o terminal utilizado para criar o projeto, então pode fechá-lo. Para rodar o projeto, abra o terminal do vscode com ctrl + ' e digite:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador e aparecerá a página padrão do Next para projetos novos.

O arquivo `app/page.tsx` é a primeira página que o projeto irá carregar e ao edita-lo, assim como outros arquivo, a página irá atualizar automaticamente (coisa linda).

Tudo pronto para o desenvolvimento de um novo projeto!

Antes de prosseguirmos com a explicação, vale destacar algumas formas de tirar dúvidas e expandir o conhecimento:
   - Sempre que tiver alguma dúvida sobre o que foi apresentado, sinta-se à vontade para entrar em contato com os membros responsáveis pela capacitação (Pedro e Ariadne), nós sempre ficaremos felizes de ajudar. 
   - Consulte a documentação, é importante saber como usá-la e é lá estão todas as informações oficiais do framework:
      - [Next.js Documentation](https://nextjs.org/docs) - documentação do Next.js.
      - [Learn Next.js](https://nextjs.org/learn) - tutorial interativo.
   - Caso seja algo mais específico, que não é tão fácil de entrar na documentação, Stackoverflow e chatGPT sempre serão boas opções, contanto que tente entender o que foi feito.
   
Obs: Ao consultar a documentação ou algum outro meio, lembre-se de certificar que se trata do Next 13, lançado esse ano, houve um grande salto desde a última versão e várias funcionalidades mudaram. Vale notar que o chatGPT ainda não possui informações após 2021, então tome cuidado ao utilizá-lo.

## Roteamento

Como dito anteriormente, houve um grande salto nas versões do Next 12 para o 13, desse modo acreditamos ser interessante apresentar como era antes e alguns problemas e como é a versão nova e como os problemas foram resolvidos.

### O que é roteamento?

O roteamento desempenha um papel fundamental em aplicativos web e determina qual conteúdo deve ser exibido em resposta a uma determinada URL. Ele permite que os desenvolvedores definam como as diferentes páginas e componentes da aplicação serão exibidos e interagem entre si.

No desenvolvimento web, o roteamento é o sistema que possibilita a navegação do usuário através de diferentes seções da aplicação, controlando o fluxo de navegação e exibição de conteúdo em uma aplicação. Esse controle do fluxo é feito a partir de rotas, ou URLs, que garantem que o usuário seja direcionado corretamente para as diferentes páginas e recursos.

De forma simples, a URL informa ao aplicativo o que o usuário deseja acessar. Por exemplo, imagine que um site possui um banco de dados sobre filmes. A URL base determina o nome do site, como `www.amantes-de-cinema.com`, e ao digitar esse link o usuário é direcionado para o site, que contém uma lista de filmes. Suponha que o usuário queira procurar as informações sobre um determinado filme, então ele pode adicionar à URL qual filme ele deseja saber a respeito, por exemplo `www.amantes-de-cinema.com/Inception-2010` ou `www.amantes-de-cinema.com/A-Quiet-Place-2018`. E então aparecerá uma página dedicada ao filme escolhido. Agora imagine que ele queira saber uma informação ainda mais específica sobre o filme, então ele pode digitar `www.amantes-de-cinema.com/Inception-2010/elenco`.

Ao utilizar o sistema de roteamento do Next.js, é possível mapear URLs específicas para componentes ou ações correspondentes na aplicação. Isso permite que os usuários naveguem pela aplicação por meio de cliques em links ou pela digitação de URLs diretamente no navegador. O roteamento também pode envolver o tratamento de parâmetros na URL, como IDs de recursos ou informações de pesquisa, e a manipulação de eventos, como o redirecionamento para uma página de erro quando uma rota não é encontrada.

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
