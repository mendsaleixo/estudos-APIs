# To-Do List com API (Vanilla JS)

![Screenshot da Tela da Aplicação](/todolist-img.png)

## Objetivo do Projeto

Este projeto é uma aplicação web de uma lista de tarefas (To-Do List). Ele foi construído como um **exercício fundamental de aprendizado** para dominar os conceitos essenciais de como uma aplicação frontend moderna se comunica com um backend.

A principal intenção foi construir uma aplicação do zero, utilizando apenas as tecnologias base da web (**HTML, CSS e JavaScript puro**), sem o auxílio de frameworks como React, Angular ou Vue. Essa abordagem foi escolhida deliberadamente para:

1.  **Entender os Mecanismos Internos:** Compreender a manipulação do DOM, o fluxo de eventos e a natureza assíncrona do JavaScript que são frequentemente abstraídos pelos frameworks.
2.  **Dominar a Comunicação com APIs:** Praticar o ciclo completo de requisições HTTP (GET, POST, PUT, DELETE) para interagir com um backend RESTful, tratando respostas de sucesso e de erro.
3.  **Construir uma Base Sólida:** Criar uma fundação de conhecimento que torna o aprendizado e o uso de qualquer framework moderno muito mais eficaz e consciente.

## Funcionalidades Principais

- **Criar (Create):** Adicionar novas tarefas à lista através de um formulário.
- **Ler (Read):** Visualizar a lista completa de tarefas ao carregar a página.
- **Atualizar (Update):** Marcar e desmarcar tarefas como concluídas, com o estado persistido no backend.
- **Deletar (Delete):** Remover tarefas da lista de forma permanente, com uma janela de confirmação para o usuário.

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do conteúdo.
- **CSS3:** Estilização moderna e responsiva.
  - **Flexbox & Grid:** Para construção de layouts robustos.
  - **Variáveis CSS (Custom Properties):** Para um tema consistente e de fácil manutenção.
  - **Animações (`@keyframes`):** Para uma experiência de usuário mais fluida.
- **JavaScript (ES6+):** Lógica da aplicação, sem frameworks ou bibliotecas externas.
- **MockAPI:** Utilizado para simular um backend RESTful, permitindo a prática real de operações CRUD via HTTP.

## Conceitos Aplicados e Aprendizados

Este projeto foi um campo de treinamento para diversos conceitos cruciais do desenvolvimento frontend:

- **Manipulação do DOM:** Criação, leitura, atualização e remoção de elementos HTML dinamicamente com JavaScript.
- **JavaScript Assíncrono:** Uso intensivo de `Promises` e da sintaxe `async/await` para lidar com operações de rede.
- **Comunicação com APIs (Fetch API):** Realização de requisições HTTP para interagir com um servidor externo.
- **Protocolo HTTP:** Entendimento prático de Métodos (`GET`, `POST`, `PUT`, `DELETE`) e Códigos de Status (2xx, 4xx, 5xx).
- **Padrões de Código:**
  - **Delegação de Eventos:** Para gerenciar eventos de forma eficiente em uma lista dinâmica.
  - **Separação de Responsabilidades:** Funções específicas para buscar dados, renderizar a UI e interagir com a API.
- **Engenharia de Software:** O processo de decompor uma ideia em requisitos, desenhar uma solução técnica e criar um plano de implementação.

## Como Executar Localmente

Como este projeto utiliza apenas tecnologias nativas do navegador, não há necessidade de um processo de build ou instalação de dependências.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd seu-repositorio
    ```
3.  Abra o arquivo `index.html` em qualquer navegador moderno.

E pronto! A aplicação estará funcionando.
