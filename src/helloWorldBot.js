const { ActivityHandler } = require('botbuilder');

class HelloWorldBot extends ActivityHandler {
  constructor() {
    super();

    this.onMessage(async (context) => {
      await context.sendActivity('Hello World! 👋');
    });

    this.onMembersAdded(async (context, next) => {
      const botId = context.activity.recipient?.id;
      const newMembers = context.activity.membersAdded || [];

      for (const member of newMembers) {
        if (member.id !== botId) {
          await context.sendActivity('Olá! Eu sou um bot simples do Microsoft Teams. Envie uma mensagem e eu responderei: Hello World! 👋');
        }
      }

      await next();
    });
  }
}

module.exports = { HelloWorldBot };
