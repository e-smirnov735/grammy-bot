import { Bot } from "grammy";
import { config } from "dotenv";

config();

const bot = new Bot(process.env.BOT_API_KEY);

bot.command("start", (ctx) => ctx.reply("from node js"));

bot.start();
