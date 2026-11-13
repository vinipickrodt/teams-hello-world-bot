require('dotenv').config();

const restify = require('restify');
const {
  CloudAdapter,
  ConfigurationBotFrameworkAuthentication,
} = require('botbuilder');
const { HelloWorldBot } = require('./src/helloWorldBot');

const authentication = new ConfigurationBotFrameworkAuthentication(process.env);
const adapter = new CloudAdapter(authentication);
const bot = new HelloWorldBot();

adapter.onTurnError = async (context, error) => {
  console.error('[onTurnError] erro não tratado:', error);
  await context.sendActivity('Ops! Ocorreu um erro. Tente novamente mais tarde.');
};

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/', (_request, response, next) => {
  response.send({ status: 'ok', message: 'Hello World Teams Bot está no ar.' });
  next();
});

server.post('/api/messages', async (request, response) => {
  await adapter.process(request, response, async (context) => bot.run(context));
});

const port = Number(process.env.PORT || 80);
server.listen(port, () => {
  console.log(`Bot disponível em http://localhost:${port}`);
  console.log(`Endpoint de mensagens: http://localhost:${port}/api/messages`);
});
