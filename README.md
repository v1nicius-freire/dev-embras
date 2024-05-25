# DEV-EMBRAS
## Objetivo
 O objetivo desses projeto é criar um cadastro de usuarios que são listados em uma página onde é possivel criar novos usuários e excluir os existentes.  
## Estrutura do Projeto
```
📦dev-embras
 ┣ 📂backend -> Arquivos da API Rails
 ┣ 📂frontend -> Arquivos do Angular
 ┣ 📜.gitignore
 ┣ 📜.tool-versions -> Arquivo de configuração do asdf
 ┣ 📜README.md
 ┗ 📜compose.yml -> Arquivo do docker compose
```
## Como usar
Para usar esse projeto primeiro você precisa ter intalado o [Docker](https://www.docker.com/).  
Com o Docker instalado, faça o clone deste repositorio: `git clone `.  
Acesse a pasta **dev-embras**.  
Crie o arquivo .env com as seguintes variaveis de ambitente:
```
POSTGRES_HOST=db
POSTGRES_DB=usuarios
POSTGRES_USER=rails
POSTGRES_PASSWORD=password123
RAILS_ENV=production
```  
Depois execute o comando `docker-compose up` no terminal ou cmd dentro da pasta **dev-embras**.  
Assim que o seguinte log aparecer basta abrir o endereço http://localhost:8080:  
```
api-1     | => Booting Puma
api-1     | => Rails 7.1.3.3 application starting in production 
api-1     | => Run `bin/rails server --help` for more startup options
api-1     | [1] Puma starting in cluster mode...
api-1     | [1] * Puma version: 6.4.2 (ruby 3.2.2-p53) ("The Eagle of Durango")
api-1     | [1] *  Min threads: 5
api-1     | [1] *  Max threads: 5
api-1     | [1] *  Environment: production
api-1     | [1] *   Master PID: 1
api-1     | [1] *      Workers: 4
api-1     | [1] *     Restarts: (✔) hot (✔) phased
api-1     | [1] * Listening on http://0.0.0.0:3000
api-1     | [1] Use Ctrl-C to stop
api-1     | [1] - Worker 0 (PID: 11) booted in 0.01s, phase: 0
api-1     | [1] - Worker 1 (PID: 15) booted in 0.01s, phase: 0
api-1     | [1] - Worker 2 (PID: 24) booted in 0.01s, phase: 0
api-1     | [1] - Worker 3 (PID: 25) booted in 0.01s, phase: 0
```
Pronto já está pronto para usar!
## Ambiente de desenvolvimento
Existem dois ambientes de desenvolvimento o **frontend** e o **backend**, ambos estão na raiz do projeto. Para executar o projeto em modo desenvolviemnto você deve seguir os passos abaixo:
1. Instalar o [Ruby](https://www.ruby-lang.org/pt/) na versão 3.2.2, o [NodeJS](https://nodejs.org/en) na versão 20.13.1,  o [PostgreSQL](https://www.postgresql.org/) na versão 16.3 e o [AngularCLI](https://angular.dev/tools/cli) na versão 17.  
2. Acesse a pasta **backend** e execute os comandos:
    1. `bundle install` para instalar as dependencias.  
    2. `rails db:prepare` para criar o banco de dados.  
3. Acesse a pasta **frontend** e execute os comandos:
    1. `npm install` para instalar as dependencias.  
    2. `npm start` para iniciar o servidor web.  
4. Agora é só acessar no navegador http://localhost:4200.  
