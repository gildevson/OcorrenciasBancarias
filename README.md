# Documentação do Sistema de Ocorrências Bancárias

## Visão Geral

![Imagem do Sistema]([./image.png](https://github.com/gildevson/OcorrenciasBancarias/blob/main/src/components/Header/Layouts.png))

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
    "02-00": "Entrada Confirmada",
    "03-08": "Entrada Rejeitada - Vencimento não validado",
    "03-12": "Entrada Rejeitada - Ocorrência não cadastrada",
    "03-13": "Entrada Rejeitada - CEP, endereço ou praça não atendida",
    "03-14": "Entrada Rejeitada - Agência cobradora não atendida",
    "03-15": "Entrada Rejeitada - Título duplicado",
    "03-16": "Entrada Rejeitada - Sacado com nome, CPF/CNPJ inválidos",
    "03-17": "Entrada Rejeitada - Erro dígito nosso número",
    "03-18": "Entrada Rejeitada - Título vencido",
    "03-19": "Entrada Rejeitada - CEP não cobrado pelo banco correspondente",
    "03-99": "Entrada Rejeitada - Título rejeitado pelo banco",
    "04-00": "Transferência de Carteira - Entrada",
    "05-00": "Transferência de Carteira - Baixa",
    "06-00": "Liquidação Normal",
    "07-00": "Liquidação Por Conta",
    "08-00": "Baixado Por Saldo",
    "09-00": "Baixado Automaticamente",
    "10-00": "Baixado Conforme Instruções",
    "11-00": "Em SER (Posição em Aberto)",
    "12-00": "Abatimento Concedido",
    "13-00": "Abatimento Cancelado",
    "14-00": "Vencimento Alterado",
    "15-00": "Liquidação em Cartório",
    "16-00": "Devolução do Cartório",
    "17-00": "Confirmação Envio Para Cartório",
    "18-00": "Título Não Processado",
    "19-00": "Baixa Por Crédito Manual"
}
