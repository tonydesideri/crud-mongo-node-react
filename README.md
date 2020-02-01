# VIRTUAL CURSO

Uma CRUD de uma loja virtual de cursos, onde pode ser feito todos os processos de um cadastro, editar curso, deletar.

O projeto foi desenvolvido com as tecnologias mais atuais como NodeJs e ReactJs, no final da página pode-se observar todas a tecnologias
utilizadas, bem como algumas das dependências mais importantes. O projeto não tem grande complexidade de código, mas resolve o problema
proposto de uma CRUD.

## Começando

Digite os seguintes códigos para importar o projeto e em sua máquina

`` git init``

``git clone https://github.com/tonydesideri/crud-virtualcurso.git ``


### Pré-requisitos

- As portas locais (3000 e 3001) dem estar liberadas para que os serviços rodem
  - 3000: Irá rodar o frontend
  - 3001: Irá rodar o backend

- O banco de dados está hospedado na nuvem(MongoDB Atlas )e não há a necessidade de se preocupar com a instalção do mesmo

### Instalando

Siga os seguintes passos que a aplicação irá rodar em sua máquina local:

1 - Abra o terminal de seu computador
2 - Navegue até a pasta BACKEND do projeto

3 - Instale as dependências do projeto

Utilizando o Yarn

``yarn ou yarn install``

Utilizando o NPM

``npm install``

NOTA: A dependência "nodemon" foi instalada como uma dependência de desenvolvimento, caso seja necessário instale-a

``yarn add nodemon -D ``

4 - Execute o comendo a seguir para colocar o projeto BACKEND rodando na porta 3000

``yarn dev``

Com o projeto BACKEND rodando passamos para o FRONTEND

1 - Abra um novo terminal
2 - Navegue até a pasta FRONTEND do projeto
3 - Instale as dependências

Utilizando o Yarn

``yarn ou yarn install``

Utilizando o NPM

``npm install ``

4 - Rode o comando a seguir para rodar a aplicação FRONTEND em seu navegador

``yarn start ``

Com isso já deve ser possível testar a aplicação

## Construído com

* [Node.js] (https://nodejs.org/en/) - O backend usado
* [MongoDB] (https://www.mongodb.com/) - O banco de dados
* [mongoose-paginate] (https://www.npmjs.com/package/mongoose-paginate) - Usado para organizar as informações do banco de dados
* [Yarn] (https://yarnpkg.com/) - Gerenciador de dependências 
* [Reactjs] (https://pt-br.reactjs.org/) - O frontend da aplicação
* [axios] (https://github.com/axios/axios) - Usado para conectar o backend ao frontend


