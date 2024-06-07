import 'dotenv/config';
import { Client } from 'discord.js';
import { getCharacterByName } from './petitions';

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
});

client.on('message', (message) =>{
    if(message.content.includes === 'ping'){
        message.delete();
    }
})

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!character')) {
        try{
            // const character = await getCharacterByName(message);
            console.log(message.author.username);
            (await message.reply(await getCharacterByName(message).then((char) => char.world))).react('👍');
        }catch(e){
            message.reply('Character not found');
        }
    }
});

client.login(process.env.TOKEN);