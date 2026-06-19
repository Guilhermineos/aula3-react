# Aula 3 - React, JSX e Componentes

Este repositório contém a resolução da lista prática da Aula 3, focada na introdução ao ecossistema do React, compreensão da sintaxe JSX e construção de Componentes Funcionais.

## O que foi implementado em cada atividade:

* **Atividade 01:** Criação do projeto base utilizando a ferramenta de build Vite com o template React + JavaScript.
* **Atividade 02:** Instalação das dependências locais (`npm install`) e execução do servidor de desenvolvimento com Hot Module Replacement (HMR).
* **Atividade 03:** Criação do primeiro componente funcional (`Saudacao.jsx`) isolado e sua importação/renderização dentro do componente principal `App.jsx`.
* **Atividade 04:** Implementação do componente `Cartao.jsx`, aplicando a regra do JSX de retornar um único elemento raiz (utilizando `<div>` e Fragments `<> </>`).
* **Atividade 05:** Integração de expressões JavaScript puras dentro do JSX no componente `Cartao`, incluindo interpolação de variáveis estáticas, cálculos matemáticos dinâmicos e chamadas de funções diretamente na interface.
* **Atividade 06:** Estilização de elementos utilizando *inline styles* (`style={{...}}`) e aplicação da sintaxe *camelCase* para atributos, além do uso de `className`.
* **Atividade 07:** Refatoração da estilização para o uso de folhas de estilo externas (`Cartao.css`), isolando a camada de design da lógica do componente.
* **Atividade 08:** Criação do componente `Cabecalho.jsx` para praticar a composição estrutural da árvore de componentes no arquivo `App.jsx`.
* **Atividade 09:** Estudo e documentação (via comentários) do fluxo de renderização inicial do React, compreendendo a injeção do componente `App` na `div id="root"` do `index.html` através do método `createRoot()` no `main.jsx`.
* **Atividade 10:** Integração final construindo a "Minha primeira página com React", unindo todos os componentes desenvolvidos (`Cabecalho`, `Saudacao`, múltiplos `Cartoes` com passagem de dados dinâmicos via escopo léxico e um `Rodape`), aplicando uma folha de estilo global.