const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf("8446312657:AAEvVNtCgakIMFOt7YTy_yPYqDxRvjLLOqE");
bot.start(ctx => ctx.reply(`Salom, ${ctx.from.first_name}! Quyidagi tugmalardan birini tanlang:`, Markup.inlineKeyboard([[Markup.button.callback('Salom','HELLO')],[Markup.button.callback('Xayr','BYE')]])));
bot.action('HELLO', ctx => ctx.reply('Salom! 😎'));
bot.action('BYE', ctx => ctx.reply('Xayr! 👋'));
bot.on('text', ctx => ctx.reply("Siz yozdingiz: "+ctx.message.text));
bot.launch().then(() => console.log("Bot ishga tushdi!"));



