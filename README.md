# Documentação da API - Academy_DB

Bem-vindo à documentação da API da seleção node adasi! Esta API foi desenvolvida para operações relacionadas a estudantes de um curso, com atividades e tarefas. Aqui você encontrará informações sobre a estrutura do projeto, configuração, execução, testes e exploração da API.

## Estrutura do Projeto

O projeto está organizado em pastas específicas, cada uma com uma responsabilidade distinta. Abaixo está uma visão geral das pastas principais:

- `config`: Configurações do banco de dados e da aplicação.
- `controllers`: Controladores para lidar com as requisições HTTP.
- `models`: Definição do modelo de dados da entidade Estudante, Curso, Atividade, Tarefa.
- `routes`: Definição de rotas da API.
- `app.ts`: Ponto de entrada da aplicação.

## Configuração do Banco de Dados

O arquivo `src/config/config.ts` e `.env` contém as configurações do banco de dados para diferentes ambientes (desenvolvimento, teste e produção). Atualmente, está configurado para usar o PostgreSQL.

## Rodando a Aplicação com Yarn

Certifique-se de ter o Yarn instalado.

1. Navegue até o diretório do projeto no terminal.
2. Execute o comando para inicializar o Yarn: `yarn init yarn`.
3. Execute o início das migrations para o banco de dados com `yarn run migration:run`.
4. Execute o início o servidor com `yarn run start`. Isso abrirá o servidor na porta 4000.
5. Acesse o aplicativo em seu navegador, geralmente em `http://localhost:4000`.
6. Acesse com uma ferramenta de desenvolvimento de API, passando o diretório `http://localhost:4000/`.

## Testando a Aplicação

Certifique-se de ter o Node.js instalado. Siga a documentação para realizar os testes:

### Testes para a API RESTful

Este repositório inclui conjuntos de testes em Node.js que podem ser usados para testar uma API RESTful. Os testes foram escritos usando a biblioteca Jest do Node.js e a biblioteca Supertest para fazer requisições HTTP para a API.

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

### GET /estudante

Este endpoint retorna uma lista de todos os estudantes registrados no sistema.

#### Parâmetros

"/"

### Respostas

- **200 OK**: Retorna uma lista de estudantes.
  Exemplo de resposta:
  ```json
  [
    {
      "id": 1,
      "nome": "João",
      "cpf": "75481274963",
      "curso": "pedagogia",
      "matricula": "95741"
    },
    {
      "id": 2,
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