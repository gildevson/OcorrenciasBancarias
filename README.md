# Documentação do Sistema de Ocorrências Bancárias

## Visão Geral

![Imagem do Sistema](./image.png)

O **Sistema de Ocorrências Bancárias** foi desenvolvido para facilitar a visualização, consulta e gerenciamento de ocorrências bancárias, utilizando um arquivo JSON como base de dados. O sistema também permite a exibição de comandos e layouts bancários.

---

## Funcionalidades

### Tela Principal
A tela principal do sistema oferece as seguintes funcionalidades:
- **Consultar Ocorrências**: Escolha o banco, código e motivo para buscar as informações diretamente no JSON.
- **Adicionar Nova Ocorrência**: Insira novas ocorrências no arquivo JSON por meio de um formulário.
- **Ver Todas as Ocorrências**: Liste todas as ocorrências já cadastradas.
- **Exibir Comandos Bancários**: Visualize comandos bancários de cada instituição.

### Navegação Simples
- Menu superior com opções de **Layout**, **Funcionalidades** e **Sobre**.
- Botões de ação acessíveis e intuitivos.

---

## Estrutura dos Dados (JSON)

As ocorrências são armazenadas em um arquivo JSON. Abaixo está a estrutura do arquivo:

### Exemplo de Arquivo JSON
```json
{
  "ocorrencias": [
    {
      "id": 1,
      "banco": "Bradesco",
      "codigo": "02",
      "motivo": "00",
      "descricao": "Ocorrência relacionada ao código 02 do banco Bradesco."
    },
    {
      "id": 2,
      "banco": "Itaú",
      "codigo": "04",
      "motivo": "12",
      "descricao": "Ocorrência de código 04 do banco Itaú com motivo 12."
    }
  ]
}
