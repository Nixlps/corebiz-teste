# Teste Corebiz :nerd_face:

[Demo Link](www.google.com.br)

## Objetivo

Desenvolver um projeto de ecommerce baseando-se no layout e APIs abaixo  

[Link do layout](https://www.figma.com/file/awhTJyKgrjEOqPHUrrFBv0/Corebiz---Frontend-Challenge?type=design&mode=design)

[Link das APIs](https://documenter.getpostman.com/view/17092794/2s9XxyQYuN)

## Sobre o projeto

- Os componentes que serão utilizados em mais de uma página ficam na pasta components

- Os componentes exclusivos de uma página ficam dentro de sua respectiva pasta. Caso alguma nova página for adicionada e necessite de um destes componentes, o mesmo deve ser transferido para a pasta components

- Como não existe o campo de desconto no JSON dos produtos, não soube como implementar de forma dinâmica o desconto com a tag na foto do produto :upside_down_face:

- O método de trabalho utilizado foi o Trunk-Based Development 

- As APIs apresentaram bastante instabilidade durante o desenvolvimento do projeto

## Tecnologias 

- ReactJS 18.2.0
- SASS 1.64
- Webpack 5.88

## Setup 

Para rodar o projeto, comece instalando as dependências 

### `npm install`

Em seguida, para abrir a aplicação no modo desenvolvimento digite

### `npm run dev`

Para gerar o bundle de produção digite

### `npm run build`

## Performance

Utilizando a biblioteca [Web Vitals](https://www.npmjs.com/package/web-vitals#import-web-vitals-from-npm), acompanhamos as métricas de Core Web Vitals no console do navegador conforme a imagem abaixo. Também é possível enviar os dados para o GA.


