import * as TelegramBot from "node-telegram-bot-api";
import * as flow from "dotenv-flow";

flow.config();
export function initiateBot() {
    const bot = new TelegramBot("765715761:AAHQujjcLGjy7xt5rV07mVo43TrJr7I3fLM", {
        polling: true
      });
      
      bot.onText(/\/echo (.+)/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[1];
        bot.sendMessage(chatId, resp);
      });
      
      bot.on("message", msg => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, "Received your message");
      });      
}
