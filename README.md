This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Iniciando com o App

Primeiro, instale as dependências executando no terminal:

```bash
npm install
# ou
yarn
```
Em seguida, inicie o servidor executando no terminal:

```bash
npm run server
# ou
yarn server
```

Por último, inicie a aplicação executando:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Funcionamento

**Nota: para realizar login com sucesso, é necessário utilizar dados pré-existentes no arquivo server.json (email: test@wiser.com.br, senha: 123456)**

Ao tentar realizar login com os dados digitados, o Yup faz a validação dos dados e são mostrados em tela os campos inválidos.
Caso os dados não coincidam com o de nenhum usuário cadastrado, um "toast" aparece em tela e informa ao usuário.
Caso um usuário já esteja logado, um "toast" aparece e informa ao usuário.
Caso todos os dados tenham sido validados corretamente e o usuário esteja cadastrado, um "toast" aparece com message de sucesso,
e o usuário passa a ser mantido no estado do Redux.

## Saiba mais

A aplicação consiste em uma página de login, desenvolvida com React, React Hooks, NextJS, Typescript, Redux, styled-components, Redux Saga, Axios e Yup

## Deploy no Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
