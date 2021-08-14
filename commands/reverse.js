const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reverse')
    .setDescription('esrever')
    .addStringOption(option => option.setName('input').setDescription('input => tupni')),
  async execute (interaction) {
    const value = interaction.options.getString('input')
    if (value) return interaction.reply(`Answer: \`${value.toString().split('').reverse().join('')}\``)
    return interaction.reply('No option was provided!')
  }
}
