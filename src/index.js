const { Client } = require("wolf.js");
const { CommandSystem } = require("cmd.wolf.js");
const { Commands, Translation } = require("./commands");
require("dotenv").config();

// Async Init Function
const init = async () => {
  const bot = new Client();

  bot.On.Security.LoginSuccess = (user) =>
    console.log(`Login Success: ${user.Nickname}`);

  bot.On.Security.LoginFailed = () => console.log("Login Failed");

  // Command Setup
  const SetupCommand = new CommandSystem(bot);
  SetupCommand.LoadTranslations(Translation);
  SetupCommand.AddCommands(...Commands);

  // Login
  await bot.Login(process.env.Email, process.env.Password);
};

init();
