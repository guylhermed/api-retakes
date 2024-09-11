# API ★ Retakes Milionários ★

Este projeto é uma API construída com Node.js e Express para realizar o upload de vídeos para o Amazon S3. Ele utiliza o Multer para lidar com o upload de arquivos e o AWS SDK para integrar com o S3. O projeto é configurado para receber vídeos via requisições HTTP POST e armazená-los de forma segura em um bucket S3. Ideal para projetos que precisam de armazenamento de vídeos em nuvem.


## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Possuir instalado em sua máquina o [NodeJs](https://nodejs.org/en). O projeto foi desenvolvido usando a versão 20.5.1

### 🔧 Instalação

Primeiramente clone o projeto para sua máquina.

Após abrir o projeto em sua IDE instale as dependências do projeto utilizando:

```
npm install
```

Instaladas as dependências, crie um arquivo chamado .env na raiz do projeto e adicione as variáveis existentes em .env.example no arquivo .env criado. Após altere o arquivo .env substituindo "your-access-key-id" "your-secret-access-key" "your-bucket-name" "your-region" por suas credenciais.

Para iniciar o servidor use:

```
npm start
```

## 🛠️ Construído com

* [Node.js](https://nodejs.org/pt) - Plataforma para execução do JavaScript no servidor.
* [Express](https://expressjs.com/pt-br/) - Framework para construir APIs e servidores web.
* [Multer]() - Middleware para manipulação de uploads de arquivos.
* [AWS SDK](https://aws.amazon.com/pt/sdk-for-javascript/) - Kit de ferramentas da AWS para interagir com o Amazon S3.

## ✒️ Autores

* **Guylherme Neves Duarte** - [@guylhermed](https://github.com/guylhermed)

## ✉️ Contato

* **Email** - guylherme_duarte@hotmail.com
