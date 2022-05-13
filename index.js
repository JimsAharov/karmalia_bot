const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5306950568:AAHQjz8jW4DLLnaWnRprEHYkF5dghvTVUy0';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "<b> Enter Password.</b>", {
      parse_mode: 'HTML',
      // reply_markup: {
      //   inline_keyboard: REPLY,
        
      // }
    });
  });
  
  
  bot.on('text', (msg)=>{
    const chatId = msg.chat.id;
    
    //console.log(msg)
    if (msg.text === 'pass'){
      
      bot.sendMessage(chatId, ` Здравствуйте, ${msg.from.first_name}!\nДобро пожаловать в Кармалию!`, {
          parse_mode: 'HTML',
          reply_markup: {inline_keyboard: REPLY},
            
         }); 
        }; 
      });
    
    
    
    const REPLY = [
      [
        { text: 'Правила игры', callback_data:'rules'},
        { text: 'Видеоурок', callback_data: 'video' },
      ],
      [
        { text: 'Купить Игру', url: 'https://karmalia.space'},
        { text: '📲Свяжитесь с нами', url: 'https://karmalia.space/contacts/'}
      ],
      [
        { text: '⭐Начать игру!', callback_data:'startGame'} 
        
      ]
    ];

    const REPLY2 = [
        [{text: '⬅️В Главное меню', callback_data: 'mainMenu'}]
    ];

    
    bot.on('callback_query', (query) => {
        //console.log(query)
        const chatId = query?.message?.chat.id;
        const userId = query.from.id;
      
        switch(query.data) {
          case 'rules': {
            bot.sendMessage(chatId,'https://youtu.be/15a5nVYAW2A' , {
              reply_markup: {
                inline_keyboard: REPLY2,
              } 
            });
          }
          break;
      
          case 'video': {
            bot.sendMessage(chatId, 'https://youtu.be/2o9CPU1SmeQ', {
              reply_markup: {
                inline_keyboard: REPLY2,
              }, 
            });
             
          }
          break;
      
          case 'mainMenu': {
            bot.sendMessage(chatId,'✅Вы вернулись в Главное Меню' , {
              reply_markup: {
                inline_keyboard: REPLY,
              } 
            });
          }
          break;
      
          
      
          
          }  
      })