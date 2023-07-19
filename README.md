

<p align="center">
  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=blue" alt="License">   
</p>

<h1 align="center">
    Cadastro Simples
</h1>


https://github.com/Gisellebm/cadastro-simples/assets/55713609/4d173afa-f9f1-4da7-94b4-33945bc11f94


<br>

## Tecnologias

Lista de tecnologias utilizadas no projeto:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Executando o projeto

1. Clone o repositório:

```bash
$ git clone https://github.com/Gisellebm/cadastro-simples
$ cd cadastro-simples
```

2. Crie um projeto no Firebase e ative o Firestore.


3. É preciso criar um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_API_KEY=
```
Usar as credenciais do seu projeto no Firebase.

4. Dentro da pasta do projeto, execute os comandos abaixo:

```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
O app estará disponível no endereço http://localhost:3000.

## Sobre o Projeto

Bitcent é uma aplicação web de Cadastro bem simples, mas foi de muito valor ao meu aprendizado, pois foi abordado vários conceitos importantes, tais como: hooks personalizados, interfaces, useState, useeffect, estilização usando o Tailwind CSS, fazer um CRUD -> Create, Read, Update e Delete; pude utilizar o Firebase para armazenamento de dados. 
O projeto foi criado na versão 10 do Next.js, mas quando fui integrar ao firebase, surgiram alguns problemas que foram resolvidos usando o 'npm audit fix'.


## License

Esse projeto está sob a [licença MIT](LICENSE.md).

---

Feito com ❤️ 

