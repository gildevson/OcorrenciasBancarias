# Documentação do Sistema de Ocorrências Bancárias

## Visão Geral

![Imagem do Sistema](./image.png)

O **Sistema de Ocorrências Bancárias** foi desenvolvido para facilitar a visualização e análise de ocorrências bancárias, além de exibir os layouts de cada banco de forma organizada. Ele permite que usuários acessem informações detalhadas sobre cada ocorrência e os padrões exigidos pelos diferentes bancos.

---

## Funcionalidades

### Tela Principal
A tela principal do sistema permite as seguintes funcionalidades:

- **Consultar Ocorrências**: Escolha o banco desejado, informe o código e o motivo para obter os detalhes das ocorrências bancárias.
- **Adicionar Nova Ocorrência**: Acesse o formulário para inserir novas ocorrências no sistema.
- **Ver Todas as Ocorrências**: Liste todas as ocorrências registradas no sistema.
- **Exibir Comandos Bancários**: Visualize comandos bancários específicos de cada instituição financeira.

### Navegação Simples
- Botões de ação, como "Consultar Ocorrência", estão organizados de forma clara e acessível.
- Um menu superior oferece acesso às páginas de **Layout**, **Funcionalidades** e **Sobre**.

---

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Estilo**: Bootstrap
- **Backend**: Node.js
- **Banco de Dados**: SQL Server

---

## Fluxo de Navegação

1. **Tela Inicial**
   - Selecione o banco e insira os dados necessários para realizar uma consulta de ocorrência.
2. **Adicionar Ocorrência**
   - Clique no botão "Adicionar Nova Ocorrência" para acessar o formulário.
3. **Visualizar Todas as Ocorrências**
   - Use o botão "Ver Todas as Ocorrências" para listar todos os registros disponíveis.
4. **Exibir Comandos Bancários**
   - Clique no botão "Exibir Comandos Bancários" para obter informações específicas de cada banco.

---

## Estrutura do Banco de Dados

### **Tabela: Ocorrências**
| Campo       | Tipo         | Descrição                             |
|-------------|--------------|---------------------------------------|
| `id`        | INT (PK)     | Identificador único da ocorrência.    |
| `banco`     | VARCHAR(100) | Nome do banco relacionado.            |
| `tipo`      | VARCHAR(100) | Tipo da ocorrência.                   |
| `data`      | DATE         | Data da ocorrência.                   |
| `descricao` | TEXT         | Descrição detalhada da ocorrência.    |

---

## Rotas da API

### **Autenticação**
- `POST /api/login`: Autenticação do usuário.

### **Ocorrências**
- `GET /api/ocorrencias`: Listar todas as ocorrências.
- `POST /api/ocorrencias`: Criar uma nova ocorrência.
- `PUT /api/ocorrencias/:id`: Atualizar uma ocorrência existente.
- `DELETE /api/ocorrencias/:id`: Excluir uma ocorrência.

---

## Contato

- **Desenvolvedor:** Gilson Fonseca  
- **Email:** [gilsonfonseca92@gmail.com](mailto:gilsonfonseca92@gmail.com)  
- **GitHub:** [gildevson](https://github.com/gildevson)
