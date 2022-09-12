////////////////////////////////////////////////////////////////////////////
const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
///////////////////////////////////////////////////////////////////////////////
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const calli = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "s!";
const cooldown = new Set();
const cdtime = 5;
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "owner") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setImage(`https://cdn.discordapp.com/attachments/779341728695451678/892247350586773524/standard_16.gif`)
      .setDescription(`
<a:867324413267542026:892078131765190686>**This Securitybot Developer by @TN hazem#4962    **

[invite](https://discord.com/api/oauth2/authorize?client_id=859937907464732722&permissions=8&scope=bot%20applications.commands) 
      `)
      .setThumbnail('https://cdn.discordapp.com/attachments/889946512904319078/892624153092448277/qfqfgsgsfggsgdsfgdfgdgdg.png')
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.login(process.env.TOKEN);
///////////////////////////////////////////////////////////////////////////////
const callienabled  = "";
const callidisabled = "";
const callifalse    = "";
const callitrue     = "";
const callicolor    = "";
const calliimgae    = "";
const calliban      = "";                                                                                                                 const securitybots  = "security#2708";
const calliwarn     = "";                                                                                                                                                                             const callidevelopers = "679688840625127531"; const calliowner = "679688840625127531";
///////////////////////////////////////////////////////////////////////////////
calli.on("ready", () => {
  console.log(`${calli.user.tag}`);
  calli.user.setActivity(`${prefix}help`, {
    Type: "Playing"
  });
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(`#07dbf7`)
      .setThumbnail(`https://cdn.discordapp.com/attachments/889946512904319078/892624153092448277/qfqfgsgsfggsgdsfgdfgdgdg.png`)
      .setImage ('https://cdn.discordapp.com/attachments/779341728695451678/892247350586773524/standard_16.gif')
      .setDescription(`
 ** <a:867324413267542026:892078131765190686> Securitybot**
Indocraft Security is an anti nuke bot with some moderation features.

 ** <:category:866155255174660146> Info Commands**
\`${prefix}botinfo\`, \`${prefix}userinfo\`, \`${prefix}serverinfo\`, \`${prefix}invite\`,\`${prefix}owner\`

** <:5473blurplemoderator:891453066501587005> Moderation Commands**
\`${prefix}lock\`, \`${prefix}unlock\`, \`${prefix}ban\`, \`${prefix}kick\`, \`${prefix}unban\`

 ** <a:867324402151718932:892090597433823323> Security Number**
\`${prefix}anti kick\`, \`${prefix}anti ban\`, \`${prefix}anti channelD\`, \`${prefix}anti channelC\`, \`${prefix}anti roleD\`, \`${prefix}anti roleC\`

** <:Security:867002790077661234> Security On <:Security_Enabled:866999903413600256> /Off <:Security_Disabled:866999903375982612> **
\`${prefix}anti bot\`: on-off

 ** <:folder:866155255099424769>**
\`${prefix}settings\`
\`${prefix}punishment\`: to check current punishment type.
\`${prefix}punishment <kick|ban|remove role>\`: to change punishment type.


<:add:866155255871569940> [**invite**](https://discord.com/api/oauth2/authorize?client_id=859937907464732722&permissions=8&scope=bot%20applications.commands)       [**support**](https://discord.gg/ZZ3SueTWmZ)


    


      `);
    message.channel.send(help);
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "rules") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setImage(`callilogo`)
      .setThumbnail(calli.user.avatarURL())
      .setDescription(`
**General Rules 

●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬●
Rule's : s
No blank nicknames.
No inappropriate nicknames.
No offensive nicknames.
No nicknames with unusual or unreadable Unicode.
No blank profile pictures.
No inappropriate profile pictures.
No sexually explicit profile pictures.
No offensive profile pictures.
No membership granted to minors (under 18 years).
Moderators reserve the right to change nicknames.
Moderators reserve the right to use their own discretion regardless of any rule.
No exploiting loopholes in the rules (please report them).
No inviting unofficial bots.
No bugs, exploits, glitches, hacks, bugs, etc.
Text chat rules
No questioning the mods.
No @mentioning the mods.
No asking to be granted roles/moderator roles.
@mention the moderators for support.
Contact the moderators under #support for support.
No @everyone/@here mentioning without permission.
No @mentioning spam.
No pornographic content.
No NSFW content.
No illegal content.
No modding.
No hacking.
No personal attacks.
No witch hunting.
No harassment.
No hate speech.
No offensive language/cursing.
No religious discussions.
No political discussions.
No flame wars.
Agree to disagree.
No trolling.
No spamming.
No excessive messaging (breaking up an idea in many posts instead of writing all out in just one post).
No walls of text (either in separate posts or as a single post).
No CAPS LOCK.
No overusing emojis.
No overusing reactions.
No external emojis.
Keep conversations in English.
Use #channel for conversations in another/other language(s).
Moderators reserve the right to delete any post.
Moderators reserve the right to edit any post.
No advertisement.
No advertisement without permission.
No links.
No linking to other servers.
No memes.
No pictures.
No gifs.
No bot commands.
Bot commands only under #bot-cmd
List of allowed bot commands:
No channel hopping.
No offtopic/use the right text channel for the topic you wish to discuss
●▬▬▬▬▬▬▬▬๑۩✰۩๑▬▬▬▬▬▬▬▬●

> Temp Mute
> Temp Kick
> Temp Ban
> Perm Ban

> Depends on your warnings**
      
      `);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`
[Click here](https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot) **to invite the bot.**
`);
    message.channel.send(help);
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(`${prefix}botinfo`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    const tnx = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .addField("Name", `${calli.user.tag}`, true)
      .addField("Name", `${calli.user.tag}`, true)
      .addField("ID", `${calli.user.id}`, true)
      .addField("Version", `${process.version}`, true)
      .addField("Guilds", `${calli.guilds.cache.size} Guilds`, true)
      .addField("Users", `${calli.users.cache.size} Users`, true)
      .addField(
        "Ping",
        `${Date.now() - message.createdTimestamp}` + "ms",
        true
      );

    message.channel.send(tnx);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "serverinfo")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    var EMBED = new Discord.MessageEmbed()
      .addField("Server Name", `${message.guild.name}`)
      .addField("Server Id", `${message.guild.id}`)
      .addField("<a:867324413267542026:892078131765190686> Guild Owner", `${message.guild.owner}`)
      .addField("<a:759515972162813973:891777897000476752>Boosts", `${message.guild.premiumSubscriptionCount}`)
      .addField("Channels", `${message.guild.channels.cache.size} Channels`)
      .addField("Roles", `${message.guild.roles.cache.size} Roles`)
      .addField("<:team_members:874348674778550294>Members", `${message.guild.memberCount} Members`)
      .setThumbnail(message.guild.iconURL())
      .setColor(`#589bff`);
    message.channel.send(EMBED);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", prof => {
  if (prof.content.startsWith(prefix + "userinfo")) {
    if (cooldown.has(prof.author.id)) {
      return prof.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(prof.author.id);
    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setThumbnail(prof.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(`#589bff`)
      .addField("Usernaem", `<@${prof.author.id}>`)
      .addField("User Id", `${prof.author.id}`)
      .addField(
        "Joined Server At",
        moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("Create User", prof.author.createdAt.toLocaleString());
    prof.channel.send(professor);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 A channel has been locked.

Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>

**Reason**
Not-Provided
          `
          )
          .setColor(`#589bff`);
        return message.channel.send(embed);
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `
🔒 A channel has been unloked.
Channel: <#${message.channel.id}>
Moderator: <@${message.author.id}>

**Reason**
Not-Provided
          
          `
          )
          .setColor(`#589bff`);
        return message.channel.send(embed);
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "servers") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .addField("Guilds", `${calli.guilds.cache.size} Guilds`, true)
      .addField("Users", `${calli.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users`, true)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embed });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("** Member not found!**");
    let bot = message.guild.member(calli.user);
    if (user.user.id == calli.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`** You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `** You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `** I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(`** Specified user is not ${mode}able.**`);
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${message.author.tag} ${
            mode == "ban" ? "banned" : mode
          } from the server! ✈️**`
        )
      )
      .catch(console.error);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send("** <a:online:867324408308695070> Unban all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**<a:online:867324408308695070> Unban this member ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "embed") {
    if (!message.guild) return;
    if (message.author.id !== message.guild.ownerID)
      return message.reply("** **You must have a higher role use this command****");
    if (!message.guild.member(calli.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "**You must have a higher role use this command**"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "embed <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`${args}`)
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("message", async message => {
  if (message.content.startsWith(`<@${calli.user.id}>`)) {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setAuthor(calli.user.username, calli.user.avatarURL())
      .setThumbnail(calli.user.avatarURL())
      .setFooter('Thanks for adding security, I wish you luck!')
      .setDescription(`
**Hello From Security**
My Prefix is [${prefix}]
**About the bot**
aprofessional moderation & security bot that can security your server
**report a problem**
If there is, you can always join the support server by type ${prefix}support. or DM a Developer. Developers you can message include 
**Extra Links**
[Support](https://discord.gg/ZZ3SueTWmZ) - [Invite](https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot) - [Website](https://discord.gg/ZZ3SueTWmZ)`);

    message.channel.send(help);
  }
});
//////////////////////////////////////////////////////////////////////////////
calli.on("guildCreate", guild => {
  let embed = new Discord.MessageEmbed()
    .setColor(`#589bff`)
    .setDescription(`Thanks for adding security, I wish you luck!`);

  guild.owner.send(embed);
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "anti") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`
**Security Number**
\`${prefix}anti kick\`: **Number**
\`${prefix}anti ban\`: **Number**
\`${prefix}anti channelD\`: **Number**
\`${prefix}anti channelC\`: **Number**
\`${prefix}anti roleD\`: **Number**
\`${prefix}anti roleC\`: **Number**

**Security On/Off**
\`${prefix}anti bot\`: **on-off**

**Security**
\`${prefix}settings\`


      `)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
calli.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1,
      time: 0.1
    };

  if (message.content.startsWith(prefix + "anti")) {
      if (message.author.id !== message.guild.ownerID) {
      let anti = new Discord.MessageEmbed()
        .setDescription("You must have a higher role use this command")
        .setColor(`#589bff`);
      return message.channel.send(anti);
 
    }
    {
      let typeanum = new Discord.MessageEmbed()

        .setDescription("type a number")
        .setColor(`#589bff`);

      {
        let onlyanum = new Discord.MessageEmbed()
          .setDescription("type a number")
          .setColor(`#589bff`);
        ///////
        if (message.content.startsWith(prefix + "anti ban")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].banLimit = num;
          {
            let ban = new Discord.MessageEmbed()
              .setColor(`#589bff`)
              .setDescription(
                `
** Anti Ban has been updated**

**Enabled**: ${callienabled}  <a:797855362694774804:891459284183941170>
Warn at: ${config[message.guild.id].banLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].banLimit} ${calliban}
`
              );

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti kick")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].kickLimits = num;
          {
            let ban = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`

** Anti Kick has been updated**

**Enabled**: ${callienabled}  <a:797855362694774804:891459284183941170>
Warn at: ${config[message.guild.id].kickLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].kickLimits} ${calliban}

`);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti roleD")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleDelLimit = num;
          {
            let roled = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
** Anti Role-Delete has been updated**

**Enabled**: ${callienabled}  <a:797855362694774804:891459284183941170>
Warn at: ${config[message.guild.id].roleDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].roleDelLimit} ${calliban} `);

            message.channel.send(roled);
           
          }
        }
        if (message.content.startsWith(prefix + "anti roleC")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].roleCrLimits = num;
          {
            let rolec = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
**Anti Role-Create has been updated**

**Enabled**: ${callienabled}  <a:797855362694774804:891459284183941170>
Warn at: ${config[message.guild.id].roleCrLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].roleCrLimits} ${calliban} `);

            message.channel.send(rolec);
           
          }
        }
        if (message.content.startsWith(prefix + "anti channelD")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaDelLimit = num;
          {
            let ban = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
**Anti Channel-Delete has been updated**

**Enabled**: ${callienabled}  <a:797855362694774804:891459284183941170>
Warn at: ${config[message.guild.id].chaDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaDelLimit} ${calliban} `);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti channelC")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].chaCrLimit = num;
          {
            let ban = new Discord.MessageEmbed().setColor(`#589bff`)
              .setDescription(`
 **Anti Channel-Create has been updated**

**Enabled**: ${callienabled}  <a:797855362694774804:891459284183941170>
Warn at: ${config[message.guild.id].chaCrLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaCrLimit} ${calliban} `);

            message.channel.send(ban);
           
          }
        }
        if (message.content.startsWith(prefix + "anti time")) {
          if (!num) return message.channel.send(typeanum);
          if (isNaN(num)) return message.channel.send(onlyanum);
          config[message.guild.id].time = num;
          {
            let ban = new Discord.MessageEmbed()
              .setColor(`#589bff`)
              .setDescription(`
** Anti Time has been updated**

**Enabled**: ${callienabled} <a:762429250623373333:891459288223060009>
Warn at: ${config[message.guild.id].time} ${calliwarn} 
Punish at: ${config[message.guild.id].time} ${calliban} `
              );

            message.channel.send(ban);
           
          }
        }
        fs.writeFile(
          "./configg.json",
          JSON.stringify(config, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }
  }
});

calli.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrchan = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
<:crowne:866155257225674752> **The Indocraft Development**

**User Punished** ${calliban} <:Punished:867002789413519392>
<:Security:867002790077661234>have punished a user, details:

**Server:**
${channel.guild.name}

**User:**
${entry.username}

**Action**
channel-create Members
            `);

          channel.guild.owner.send(warncrchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelchan = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban}
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
channel-delete Members
            `);

          channel.guild.owner.send(warndelchan);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warndelrole = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban}
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
role-delete Members
            `);

          channel.guild.owner.send(warndelrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warncrrole = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban} 
have punished a user, details:
**Server:**
${channel.guild.name}
**User:**
${entry.username}
**Action**
role-create Members
            `);

          channel.guild.owner.send(warncrrole);
        });
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnban1 = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban}
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
banning Members
            `);

          guild.owner.send(warnban1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

calli.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      chaCrLimit: 1,
      roleCrLimits: 1
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e => {
          let warnkick1 = new Discord.MessageEmbed()
            .setColor(`#589bff`)
            .setFooter(`security`).setDescription(`
**User Punished** ${calliban} 
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
kicking Members
            `);

          guild.owner.send(warnkick1);
        });
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
calli.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 1,
        chaDelLimit: 1,
        roleDelLimit: 1,
        kickLimits: 1,
        chaCrLimit: 1,
        roleCrLimits: 1
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e => {
            let warnban2 = new Discord.MessageEmbed()
              .setColor(`#589bff`)
              .setFooter(`security`).setDescription(`
**User Punished** ${calliban}
have punished a user, details:
**Server:**
${guild.guild.name}
**User:**
${entry.username}
**Action**
banning Members
            `);

            guild.owner.send(warnban2);
          });
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "settings") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setColor(`#589bff`)
      .setImage('https://cdn.discordapp.com/attachments/779341728695451678/892247350586773524/standard_16.gif')
      .setAuthor("Security Settings", "")
      .setDescription(`
      
<a:online:867324408308695070> **Anti Ban**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].banLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].banLimit} ${calliban}
**Anti Kick**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].kickLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].kickLimits} ${calliban}


<a:online:867324408308695070> **Anti Role-Create**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleCrLimits} ${calliwarn} 
Punish at: ${config[message.guild.id].roleCrLimits} ${calliban}
**Anti Role-Delete**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].roleDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].roleDelLimit} ${calliban}


<a:online:867324408308695070> **Anti Channel-Create**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaCrLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaCrLimit} ${calliban}
**Anti Channel-Delete**
Enabled: ${callienabled}
Warn at: ${config[message.guild.id].chaDelLimit} ${calliwarn} 
Punish at: ${config[message.guild.id].chaDelLimit} ${calliban}


**Punishment:**
Ban: ${calliban}
      
      `);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8"));
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
    .setColor(`#589bff`)
    .setDescription(`
<:crowne:866155257225674752> **The Discord Development**

Anti Bot Has been updated 
Enabled: ${callienabled} <:Security_Enabled:866999903413600256>
`)
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(embed);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let embed = new Discord.MessageEmbed()
    .setColor(`#589bff`)
          .setDescription(
        `
<:crowne:866155257225674752> **The Discord Development**

Anti Bot Has been updated 
Disabled: ${callidisabled} <:Security_Disabled:866999903375982612>
`
      )
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(embed);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "punishment") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`Type a Punishment like **Kick** Or **Ban**`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "punishment ban") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`Punishment has update to ban`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////
calli.on("message", message => {
  if (message.content === prefix + "punishment kick") {
  if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**You must have a higher role use this command**");
    let embed = new Discord.MessageEmbed()
      .setColor(`#589bff`)
      .setDescription(`Punishment has update to kick`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////


