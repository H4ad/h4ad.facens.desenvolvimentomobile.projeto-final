# Aplicativo

O projeto foi gerado usando o [Angular CLI](https://github.com/angular/angular-cli) versão 13.3.6.

O aplicativo não foi integrado com nenhuma API apesar de possuir toda a estrutura para tal, para simplificar o projeto, foi decidido que seria apenas usado um mockup para listar as informações e para salvar.

## Como rodar o projeto

Instale todas as dependencias com `npm i`.

Depois, rode `ng serve` para iniciar o projeto. Navegue até [http://localhost:4200/](http://localhost:4200/) para visualizar.

## Rotas

Por enquanto, no aplicativo você possui as seguintes rotas:

- `/main/login`: Tela de Login
- `/main/register`: Tela de Criação de Conta
- `/main/categories`: Tela de Listagem de Categorias
- `/main/categories/create`: Tela de Criação de Categorias
- `/main/categories/1/projects`: Tela de Listagem de Projetos por Categoria
- `/main/categories/1/projects/create`: Tela de Criar um projeto
- `/main/projects`: Tela de Listagem de Projetos
- `/main/projects/1`: Tela de Visualização de um Projeto
- `/main/freelancers`: Tela de Listagem de Freelancers
- `/main/freelancers/me`: Tela de Sobre Mim
