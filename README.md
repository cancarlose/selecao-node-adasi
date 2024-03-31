# Documentação da API - Academy_DB

Bem-vindo à documentação da API da seleção node adasi! Esta API foi desenvolvida para operações relacionadas a estudantes de um curso, com atividades e tarefas. Aqui você encontrará informações sobre a estrutura do projeto, configuração, execução, testes e exploração da API.

## Estrutura do Projeto

O projeto está organizado em pastas e arquivos específicos, cada uma com uma responsabilidade distinta. Abaixo está uma visão geral das pastas principais:

- `src`: Pasta source do projeto.
- `controllers`: Controladores para lidar com as requisições HTTP.
- `entity`: Definição do modelo de dados da entidade Estudante, Curso, Atividade, Tarefa.
- `migration`: Pasta de migrações dos dados para o banco de dados.
- `data-source.ts`: Ponto de conexão com o banco de dados, atraves do `.env`.
- `index.ts`: Ponto de entrada da aplicação.
- `routes.ts`: Definição de rotas da API.

## Configuração do Banco de Dados

O arquivo `src/index.ts` e `.env` contém as configurações do banco de dados para diferentes ambientes (desenvolvimento, teste e produção). Atualmente, está configurado para usar o PostgreSQL.

## Rodando a Aplicação com Yarn

Certifique-se de ter o Yarn instalado.

1. Navegue até o diretório do projeto no terminal.
2. Execute o comando para inicializar o Yarn: `yarn`.
3. Execute o Typeorm: `yarn add typeorm pg` 
4. Execute as migrations `yarn typeorm migration:run`.
5. Execute o início do servidor com `yarn start`. Isso abrirá o servidor na porta 3000.
6. Acesse o aplicativo em seu navegador, geralmente em `http://localhost:3000`, ou.
7. Acesse com o Swagger UI, passando o diretório: `http://localhost:3000/api-docs/#/`.

## Testando a Aplicação

Certifique-se de ter o Node.js, Express e TypeScript instalados. Siga a documentação para realizar os testes:

### Testes para a API RESTful

Este repositório inclui conjuntos de testes em Node.js que podem ser usados para testar uma API RESTful. Os testes foram escritos usando a biblioteca Express do Node.js para fazer requisições HTTP para a API.

### Estrutura dos Testes

Os testes estão organizados em conjuntos para cada operação CRUD (Create, Read, Update, Delete) da API. Cada conjunto de testes aborda cenários específicos para garantir a funcionalidade correta da API em diferentes situações.

- Teste de Criação de Estudante, Curso, Atividade e Tarefa: Testa a criação de novos estudantes, cursos, atividades e tarefas.
- Teste de Exclusão de Estudante, Curso, Atividade e Tarefa: Testa a exclusão de estudantes, cursos, atividades e tarefas existentes.
- Teste de Leitura de Estudante, Curso, Atividade e Tarefa: Testa a leitura de estudantes, cursos, atividades e tarefas existentes.
- Teste de Atualização de Estudante, Curso, Atividade e Tarefa: Testa a atualização de estudantes, cursos, atividades e tarefas existentes.

### Relação com a API RESTful

Os testes em Node.js interagem diretamente com os endpoints da API RESTful. Aqui está como eles se relacionam com os endpoints da API:

- Teste de Criação de Estudante, Curso, Atividade e Tarefa: Verifica se a API pode criar novos estudantes, cursos, atividades e tarefas com dados válidos e lidar corretamente com dados inválidos ou ausentes.
- Teste de Exclusão de Estudante, Curso, Atividade e Tarefa: Verifica se a API pode excluir estudantes, cursos, atividades e tarefas existentes e lidar com diferentes cenários, como IDs inválidos ou inexistentes.
- Teste de Leitura de Estudante, Curso, Atividade e Tarefa: Verifica se a API pode obter estudantes, cursos, atividades e tarefas existentes e lidar com diferentes casos, como IDs válidos, inválidos ou inexistentes.
- Teste de Atualização de Estudante, Curso, Atividade e Tarefa: Verifica se a API pode atualizar estudantes, cursos, atividades e tarefas existentes com dados válidos e lidar corretamente com dados inválidos, IDs inexistentes ou áreas totais inválidas.

Esses testes fornecem uma maneira automatizada de garantir que a API funcione conforme o esperado e ajuda a identificar problemas rapidamente durante o desenvolvimento.

## Endpoints da API

| Endpoint       | Descrição                                    | Método HTTP |
|----------------|----------------------------------------------|-------------|
| `/estudante`   | Endpoint para manipular dados de estudantes  | GET, POST   |
| `/curso`       | Endpoint para manipular dados de cursos      | GET, POST   |
| `/tarefa`      | Endpoint para manipular dados de tarefas     | GET, POST   |
| `/atividade`   | Endpoint para manipular dados de atividades  | GET, POST   |
|----------------|----------------------------------------------|-------------|
| `/estudante/id`| Endpoint para manipular dados de estudantes  | PUT, DELETE |
| `/curso/id`    | Endpoint para manipular dados de cursos      | PUT, DELETE |
| `/tarefa/id`   | Endpoint para manipular dados de tarefas     | PUT, DELETE |
| `/atividade/id`| Endpoint para manipular dados de atividades  | PUT, DELETE |

## Exemplo 

### GET /estudante

Este endpoint retorna uma lista de todos os estudantes registrados no sistema.

#### Parâmetros

"/estudante"

### Respostas

- **200 OK**: Retorna uma lista de estudantes.
  Exemplo de resposta:
  ```json
  [
    {
      "id": "96108a4a-3c03-42aa-895e-8074df6feb2c",
      "nome": "João",
      "cpf": "75481274963",
      "curso": "pedagogia",
      "matricula": "95741"
    },
    {
      "id": "84b1d415-f9b1-47c1-84ae-be8502821fa1",
      "nome": "Maria",
      "cpf": "52148796548",
      "curso": "psicologia",
      "matricula": "65478"
    }
  ]

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

## Licença

Este projeto está licenciado sob a licença [MIT](https://github.com/cancarlose/selecao-node-adasi/blob/main/LICENSE).