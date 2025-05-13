# Feitosa Elegance 
 
Feitosa Elegance é um projeto em desenvolvimento de um site institucional e de vendas para uma loja. A proposta é oferecer uma interface elegante e funcional, com estrutura organizada e modularizada, facilitando manutenção e escalabilidade. 
 
## 📁 Estrutura do Projeto 
 
O projeto segue uma arquitetura básica com HTML, CSS, JavaScript e SCSS, além do uso de Node.js para dependências e scripts auxiliares. 
 
``` 
FeitosaElegancePast/ 
├── css/                 # Estilos CSS compilados 
├── fonts/               # Fontes utilizadas no site 
├── images/              # Imagens do projeto 
├── js/                  # Scripts JS 
│   ├── routes.js        # Rotas de navegação 
├── node_modules/        # Dependências Node 
├── scss/                # Estilos em SCSS (pré-processado) 
├── about.html           # Página de "sobre"
├── backend.html         # Interface do backend
├── cadastro.html        # Página de cadastro 
├── contact.html         # Página de contato
├── index.html           # Página principal 
├── loja.html            # Página da loja 
├── remember.html        # Esqueci a senha
├── services.html        # Página de serviços
├── bancodedados.js      # Simulação de banco (mock) 
├── package.json 
├── package-lock.json 
├── prepros-6.config     # Configuração do Prepros (SCSS) 
└── README.md            # Você está aqui 😄 
``` 
 

 
--- 
 
## 🚀 Como Rodar o Projeto 
 
### 1. Clone o Repositório 
 
```bash 
git clone https://github.com/seu-usuario/FeitosaElegance.git 
cd FeitosaElegance/FeitosaElegancePast 
``` 
 
### 2. Instale as Dependências 
 
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. 
 
```bash 
npm install 
``` 
 
### 3. Compile o SCSS (se estiver usando Prepros) 
 
O projeto usa SCSS, então você pode usar o Prepros (arquivo `prepros-6.config` incluso) pra compilar pra CSS automaticamente. Alternativamente, use o Sass via terminal: 
 
```bash 
sass scss/:css/ --watch 
``` 
 
### 4. Abra o Projeto 
 
Você pode abrir o `index.html` diretamente no navegador ou rodar um servidor local (ex: usando Live Server no VSCode). 
 
--- 
 
## 🛠 Tecnologias Utilizadas 
 
- HTML5 
- CSS3 / SCSS 
- JavaScript 
- Node.js (para dependências e organização) 
- Prepros (opcional, para compilar SCSS) 
 
--- 
 
## ✅ Status do Projeto 
 
🟡 **Em desenvolvimento** 
 
--- 
 
## 📌 Notas 
 
- O foco inicial está em criar as páginas institucionais e o layout da loja. 
- Ainda será adicionado backend real e funcionalidades dinâmicas (como integração com banco de dados, autenticação, etc). 
- Algumas rotas e arquivos estão em fase de rascunho ou placeholders. 
 
--- 
 
## 📄 Licença 
 
Esse projeto é open-source e está sob a licença [MIT](LICENSE) (adicione um arquivo LICENSE caso deseje). 
