import 'dotenv/config';
import { Client } from 'discord.js';
import { getCharacterByName } from './petitions';

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
});

client.on('message', (message) => {
    if(message.content.includes('ping')){
        message.delete();
    }
})

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!character')) {
        console.log(message.author.username);

        await getCharacterByName(message)
            .then(async (character) => {
                await message.reply(character.world).then((message) => message.react('👍'));
            })
            .catch((err) => {
                message.reply('Character not found.');
            })
    }
});

client.login(process.env.TOKEN);