![Capa do Projeto](./imagens/capa-projeto.png)

# 🛡️ API de Pagamentos Segura com Azure API Management

Projeto desenvolvido como parte do desafio da DIO, com o objetivo de aplicar conceitos de segurança, gerenciamento e monitoramento de APIs utilizando o Azure API Management.

## ✅ Objetivo
Criar uma API de pagamentos simples e protegê-la utilizando recursos nativos da Azure, como:

- Azure API Management (APIM)
- Autenticação por chave ou token JWT
- Rate Limiting
- Monitoramento e logging

## 🏗️ Tecnologias Utilizadas
- Node.js com Express
- Azure API Management
- Azure App Service
- Azure Monitor / Application Insights
- Postman (testes)
- Git + GitHub

## 🚀 Como Executar Localmente
```bash
git clone https://github.com/seu-usuario/api-pagamentos-segura.git
cd api-pagamentos-segura/src/pagamentos-api
npm install
npm start
```

## 🔐 Segurança da API
A API está protegida via Azure API Management, utilizando uma política de validação de API Key:

```xml
<validate-header name="x-api-key" failed-check-httpcode="401" failed-check-error-message="Chave inválida">
    <value>chave-exemplo-123</value>
</validate-header>
```

## 🧪 Testes com Postman
```
POST https://<sua-api>.azure-api.net/pagamentos
Headers:
  x-api-key: sua-chave-valida
  Content-Type: application/json

Body:
{
  "valor": 150.00,
  "moeda": "BRL",
  "metodo": "cartao_credito"
}
```

## 📸 Prints do Projeto
Adicione prints do portal da Azure na pasta `/imagens`:
- Tela do APIM configurado
- Políticas aplicadas
- Logs de monitoramento

## 💡 Aprendizados
- Segurança e gerenciamento de APIs
- Como usar o Azure API Management
- Boas práticas com App Service e logs

## 📎 Referências
- https://learn.microsoft.com/pt-br/azure/api-management/
- https://github.com/digitalinnovationone/Microsoft_Application_Platform
