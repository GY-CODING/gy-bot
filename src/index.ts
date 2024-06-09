import 'dotenv/config';
import { Client } from 'discord.js';
import { getCharacterByName } from './data/characters-fetch';
import { getWorldByName } from './data/worlds-fetch';

const PREFIX: string = '++';

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});


client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'confirm') {
        await interaction.reply('Ban confirmed.');
    } else if (interaction.customId === 'cancel') {
        await interaction.reply('Ban canceled.');
    }
});

client.on('message', (message) => {
    if(message.content.includes('ping')){
        message.delete();
    }
});


client.on('messageCreate', async (message) => {
    console.log(message.author.username);

    switch (true) {
        case message.content.startsWith(`${PREFIX}character`):
             await getCharacterByName(message)
             .then(async (character) => {
                await message.reply(character.toString());
             })
             .catch((err) => {
                message.reply('Character not found.');
             });
            
            break;
        case message.content.startsWith(`${PREFIX}story`):
             await getCharacterByName(message)
             .then(async (character) => {
                await message.reply(character.stories[0].toString());
             })
             .catch((err) => {
                message.reply(err);
             });
            
            break;
        case message.content.startsWith(`${PREFIX}world`):
            await getWorldByName(message)
            .then(async (world) => {
                await message.reply(world.toString());
            })
            .catch((err) => {
                message.reply('World not found.');
            });
            
            break;
    }
});


client.login(process.env.TOKEN);

