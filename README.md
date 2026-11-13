# Teams Hello World Bot

Um bot mínimo para Microsoft Teams. Ao receber uma mensagem, responde `Hello World! 👋`; quando alguém adiciona o bot à conversa, envia uma mensagem de boas-vindas.

## Requisitos

- Node.js 18 ou superior
- Um registro de bot no Azure com o canal Microsoft Teams habilitado para conversar com o bot dentro do Teams

## Executar localmente

```bash
npm install
cp .env.example .env
```

Preencha no `.env` as credenciais do registro do bot no Azure (`MicrosoftAppId`, `MicrosoftAppPassword` e `MicrosoftAppTenantId`). Mantenha esse arquivo privado: ele contém segredos e já está no `.gitignore`.

Depois, inicie o servidor:

```bash
npm start
```

O endpoint de atividades é `http://localhost:3978/api/messages`. Para receber atividades do Teams, o endpoint precisa estar acessível pela internet via HTTPS (por exemplo, usando um túnel de desenvolvimento) e essa URL, com `/api/messages`, deve ser configurada como endpoint de mensagens do bot no Azure.

## Configuração do Microsoft Teams

1. Crie um recurso de bot no Azure e configure a autenticação de aplicativo como **Single Tenant**.
2. Habilite o canal **Microsoft Teams** para o bot.
3. Configure o endpoint HTTPS público do servidor, terminando em `/api/messages`.
4. Crie/instale um pacote de aplicativo do Teams que aponte para o ID do aplicativo do bot e os escopos desejados (pessoal, grupo ou equipe).
5. Instale o aplicativo no Teams e envie uma mensagem para testar.

Este repositório fornece o código do bot e o endpoint de atividades. O registro no Azure, as credenciais e o pacote de aplicativo do Teams precisam ser configurados para cada ambiente.

## Estrutura

```text
.
├── index.js                 # Servidor HTTP e adaptador do Bot Framework
├── src/helloWorldBot.js     # Respostas do bot
├── .env.example             # Modelo de configuração local
└── package.json
```
