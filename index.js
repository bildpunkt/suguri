const Discord = require('discord.js');
const client = new Discord.Client();

const roles = require('./roles.json');
const config = require('./config.json');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore everything that doesn't start with !
  if (!message.content.startsWith("!")) return false;

  if (message.channel.name !== config.channel) return false;

  // Setup command, creates all roles from config
  // Also checks if roles already exist and skips those
  if (message.content.includes('setup')) {

    if (message.member.permissions.has('ADMINISTRATOR')) {

      let roleArr = Object.keys(roles);

      roleArr.forEach(function (role) {
        if (message.guild.roles.find("name", role) != null) return true;

        message.guild.createRole({
          name: role,
          color: roles[role]
        }).catch(console.error)

      })

    } else {
      message.reply('insufficient permissions')
    }
  }

  // Actual role part
  // First we match for everything that follows after a !
  let match = /!([a-zA-Z0-9_ ]*)/g.exec(message.content)
  if (match && Object.keys(roles).includes(match[1])) {
    // If it's matched, let's check if a role with this name exists
    let role = message.guild.roles.find("name", match[1])

    if (role !== null) {
      if (message.member.roles.find("name", match[1])) {
        // If our user already has this role, remove it
        message.member.removeRole(role)
      } else {
        // If our user doesn't have this role, add it
        message.member.addRole(role)
      }
    }
  }
});

// Log our bot in
client.login(config.token);