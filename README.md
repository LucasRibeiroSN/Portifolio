# Portfólio Pessoal com Next.js

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Um projeto de portfólio pessoal simples e moderno, que foi desenvolvido para eu poder exibir os meus projetos e habilidades.
Construído com **Next.js 13+** (App Router), **React** e **CSS Modules** para uma estrutura organizada e de fácil manutenção.

---

## 🚀 Acesso ao Vivo

Você pode visualizar o projeto em funcionamento no seguinte link:

### ➡️ [**Visitar o Portfólio**](https://seu-portfolio-incrivel.vercel.app/)

---

## ✨ Funcionalidades

-   **Design Limpo e Moderno:** Interface de utilizador minimalista e focada no conteúdo.
-   **Totalmente Responsivo:** Adapta-se perfeitamente a ecrãs de computadores, tablets e telemóveis.
-   **Componentizado:** Estrutura de código organizada em componentes reutilizáveis para fácil manutenção.
-   **Otimizado para SEO:** Utiliza as capacidades de renderização do lado do servidor (SSR) do Next.js 
      para uma melhor indexação nos motores de busca.
-   **Fácil de Personalizar:** Altere facilmente as informações pessoais, projetos e links de contacto.

---

## 🚀 Tecnologias Utilizadas

-   **Next.js:** Framework React para produção, com renderização estática e do lado do servidor.
-   **React:** Biblioteca JavaScript para construir interfaces de utilizador.
-   **CSS Modules:** Para estilização local e escopada por componente, evitando conflito de classes CSS.
-   **Vercel:** Plataforma de implementação otimizada para projetos Next.js.

---

## 🛠️ Executando o Projeto Localmente

Se você deseja explorar o código, fazer modificações ou usar este projeto como base para o seu próprio portfólio, siga os passos abaixo.

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão 18.x ou superior)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  Clone o repositório para a sua máquina local:
    ```bash
    git clone [https://github.com/seu-usuario/meu-portfolio.git](https://github.com/seu-usuario/meu-portfolio.git)
    ```
2.  Navegue para o diretório do projeto:
    ```bash
    cd meu-portfolio
    ```
3.  Instale as dependências do projeto:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```
---


## 📂 Estrutura do Projeto
O projeto segue a estrutura de pastas do App Router do Next.js.

---


```
    /
    ├── app/
    │   ├── globals.css         # Estilos globais
    │   ├── layout.js           # Layout raiz da aplicação
    │   └── page.js             # Página principal (Home)
    │
    ├── components/             # Componentes React reutilizáveis
    │
    └── styles/
        └── Home.module.css     # Estilos CSS específicos
```

---

## ✏️ Personalização
A personalização do portfólio é simples e centralizada nos seguintes ficheiros:

| Arquivo                  | O que modifica                                                   |
|--------------------------|------------------------------------------------------------------|
| `components/Header.js`   | Altere **seu nome** e **seu título profissional**.               |
| `components/About.js`    | Escreva uma **breve descrição sobre você**.                      |
| `components/Projects.js` | Adicione seus projetos no **array `projectsData`**.              |
| `components/Contact.js`  | Atualize os **links de contato** (email, LinkedIn, GitHub).      |
| `app/globals.css`        | Altere as **cores do tema** nas variáveis CSS dentro de `:root`. |

---

## 📄 Licença
Este projeto está sob a licença MIT. Veja o ficheiro LICENSE para mais detalhes.