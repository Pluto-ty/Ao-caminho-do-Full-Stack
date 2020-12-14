

<h1 align="center">
     🕹️ <a href="#" alt="Projeto Game Dev"> Ao caminho do Full Stack </a>
</h1>

<h3 align="center">
    Reposítorio pessoal com conteúdo do que aprendi no curso Desenvolvimento Web Full stack do programador br.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Pluto-ty/Ao-caminho-do-Full-Stack?style=flat-square">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Pluto-ty/Ao-caminho-do-Full-Stack">
  
  <a href="https://github.com/Pluto-ty/README/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Pluto-ty/Ao-caminho-do-Full-Stack">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/Pluto-ty/Ao-caminho-do-Full-Stack/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Pluto-ty/Ao-caminho-do-Full-Stack?style=social">
  </a>
 
  <a href="https://github.com/Pluto-ty">
    <img alt="Stargazers" src="https://img.shields.io/badge/Feito por- Thyago Araujo-%237159c1?style=flat&logo=ghost">
    </a>
  
 
</p>

<h4 align="center">
	🚧  Em andamento 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
   * [Tecnologias](#-tecnologias)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->

---

## 💻 Sobre o repositório

Esse repositório é totalmente focado na minha caminhada de aprendizado para ser um desenvolvedor full stack focado no front-end.

🚧  Aviso 🚧 
Códigos comentados para minha própria revisada se precisar, se houver algo que acha que pode ser melhorado, não tenha medo de me comunicar isso me ajuda no meu crescimento profissional. 

---
## 🎨 Layout

<h2> Pagina de Captura

### Mobile

<p align="center">
  <img alt="Header/Main" title="Header/Main" src="./assets/home-mobile.png" width="200px">

  <img alt="Footer" title="#NextLevelWeek" src="./assets/detalhes-mobile.svg" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/web.svg" width="400px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/sucesso-web.svg" width="400px">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:tgmarinho/README-ecoleta.git

# Acesse a pasta do projeto no terminal/cmd
$ cd README-ecoleta

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```
<p align="center">
  <a href="https://github.com/tgmarinho/README-ecoleta/blob/master/Insomnia_API_Ecoletajson.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:tgmarinho/README-ecoleta.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd README-ecoleta

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Leaflet](https://react-leaflet.js.org/en/)**
-   **[React Leaflet](https://react-leaflet.js.org/)**
-   **[React Dropzone](https://github.com/react-dropzone/react-dropzone)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/web/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[Celebrate](https://github.com/arb/celebrate)**
-   **[Joi](https://github.com/hapijs/joi)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/server/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#mobile-react-native--typescript)**Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Native Maps](https://github.com/react-native-community/react-native-maps)**
-   **[Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/)**
-   **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Expo Location](https://docs.expo.io/versions/latest/sdk/location/)**
-   **[Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/mobile/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)**
-   API:  **[IBGE API](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1)**  →  **[API de UFs](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)**,  **[API de Municípios](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)**
-   Maps:  **[Leaflet](https://react-leaflet.js.org/en/)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Ícones:  **[Feather Icons](https://feathericons.com/)**,  **[Font Awesome](https://fontawesome.com/)**
-   Fontes:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**,  **[Roboto](https://fonts.google.com/specimen/Roboto)**



## 🚀 Como executar o projeto



### Pré-requisitos
Antes de começar, você vai ter que ter instalado para a parte dos jogos feitos em java o [Eclipse IDE](https://www.eclipse.org/downloads/) e o [JDK](https://www.oracle.com/java/technologies/javase-downloads.html) do java. Para os jogos feitos em Game maker tem o próprio aplicativo [Game Maker](https://www.yoyogames.com/get).


---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Desenvolvimento dos jogos**

-   **[Eclipse](https://www.eclipse.org/downloads/)**
-   **[Paint.net](https://www.getpaint.net)**
-   **[LibreSprite](https://github.com/LibreSprite/LibreSprite)**
-   **[GameMaker](https://www.yoyogames.com)**


---

## Demonstração dos jogos:


---


## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## Autor

<a href="https://github.com/Pluto-ty">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/51569984" width="100px;" alt=""/>
 <br />
 <sub><b>Thyago Araujo</b></sub></a> </a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-ThyagoAraujo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thyago-araujo-m/)](https://www.linkedin.com/in/thyago-araujo-m/) 
[![Gmail Badge](https://img.shields.io/badge/-thyagoaraujomotta@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thyagoaraujomotta@gmail.com)](mailto:thyagoaraujomotta@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE.md).

Feito com ❤️ por Thyago Araujo 👋🏽 [Entre em contato!](https://www.linkedin.com/in/thyago-araujo-m/)

---
