# DevOps To-Do App 🚀

Este projeto foi desenvolvido como parte da aula de Containers e Azure. Ele consiste em uma aplicação To-Do moderna, construída com React e Vite, pronta para ser empacotada com Docker e implantada no Azure App Service.

## 🛠️ Tecnologias
- **React + Vite**: Frontend rápido e moderno.
- **Tailwind CSS**: Estilização via CDN para simplicidade.
- **Lucide React**: Ícones bonitos e leves.
- **Docker**: Containerização multi-stage para imagens leves (aprox. 20MB).
- **GitHub Actions**: Pipeline de CI/CD automatizado.

## 📦 Como rodar localmente (VS Code)
1. Abra a pasta no VS Code.
2. Instale as dependências: `npm install`
3. Rode o projeto: `npm run dev`

## 🐳 Docker (Manual)
Para criar a imagem localmente:
```bash
docker build -t seu-usuario/todo-app:v1 .
```

## ☁️ Deploy no Azure
1. Crie um **Resource Group** (`rg-aula-containers`).
2. Crie um **App Service** (Web App para Containers, Linux).
3. Conecte ao seu repositório do **Docker Hub**.
4. Acesse a URL `.azurewebsites.net` e veja a mágica!

---
*Desenvolvido fiel ao material da aula.*
