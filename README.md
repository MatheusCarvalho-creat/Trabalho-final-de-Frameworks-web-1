📘 Trabalho Final de Frameworks Web

Este projeto foi desenvolvido como parte do Trabalho Final da disciplina de Frameworks Web.
O sistema consiste em uma aplicação SPA (Single Page Application) construída com React + Vite, que permite criar e visualizar posts de forma simples e intuitiva.

✨ Funcionalidades

📌 Página inicial (Home): exibe os posts já cadastrados.

➕ Novo Post: formulário para criação de novos posts (com título e conteúdo).

🌐 Navegação dinâmica: uso do React Router para alternar entre páginas sem recarregar a aplicação.

🔄 Integração com API: consumo de dados utilizando Axios.

🎨 Estilização: uso de CSS modularizado para componentes e páginas.

🛠️ Tecnologias Utilizadas

⚛️ React 19

⚡ Vite

🌐 React Router DOM

📡 Axios

📂 Estrutura do Projeto
src/
 ├── components/
 │   └── Navbar.jsx      # Barra de navegação
 ├── routes/
 │   ├── Home.jsx        # Página inicial (lista de posts)
 │   └── NewPost.jsx     # Página para criar novo post
 ├── App.jsx             # Estrutura principal da aplicação
 ├── main.jsx            # Ponto de entrada do React
 └── assets/             # Recursos estáticos

🚀 Como Executar o Projeto

Clone este repositório:

git clone https://github.com/SEU-USUARIO/Trabalho-final-de-frameworks-web.git


Acesse a pasta do projeto:

cd Trabalho-final-de-frameworks-web


Instale as dependências:

npm install


Execute o servidor de desenvolvimento:

npm run dev


Acesse no navegador:

http://localhost:5173
