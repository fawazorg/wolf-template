const { Command, CommandContext } = require("cmd.wolf.js");
const Translation = [
  {
    key: "HELP",
    translations: {
      en: "!bot help",
      ar: "!بوت تجربة",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const Help = async (bot, context) => {
  await context.Reply("Test Test Test ...");
};

/**
 *
 */
const Commands = [
  new Command("HELP", {
    method: (null, Help),
    filters: [],
  }),
];

module.exports = {
  Commands,
  Translation,
};
