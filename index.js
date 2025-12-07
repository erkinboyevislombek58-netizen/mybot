const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
bot.start((ctx) => {ctx.reply(`Salom ${ctx.from.first_name}! Botimizga xush kelibsiz.`, Markup.inlineKeyboard([[Markup.button.callback('Rasm ko‘rish','SHOW_IMAGE')],[Markup.button.callback('E’lonlar','SHOW_ADS')]]))});
bot.action('SHOW_IMAGE',(ctx)=>{ctx.replyWithPhoto({url:'https://picsum.photos/400/300'},{caption:'Mana siz uchun rasm!'})});
bot.action('SHOW_ADS',(ctx)=>{ctx.reply('📝 Bugungi e’lon: Sizga maxsus takliflar mavjud!')});
bot.on('text',(ctx)=>{ctx.reply(`Siz yozdingiz: ${ctx.message.text}`)});
bot.launch().then(()=>console.log('Bot ishga tushdi 🚀')).catch((err)=>console.error('Xatolik:',err));
process.once('SIGINT',()=>bot.stop('SIGINT'));
process.once('SIGTERM',()=>bot.stop('SIGTERM'));




