import 'dotenv/config';
import { ActionRowBuilder, Client } from 'discord.js';
import { getCharacterByName, listCharacters } from './data/characters-fetch';
import { getWorldByName } from './data/worlds-fetch';
import { charactersButton, itemsButton, worldsButton } from './buttons';

const PREFIX: string = '++';


const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
});

client.on('messageCreate', async (message) => {
    switch (true) {
        case message.content === `${PREFIX}`:
            const row : any = new ActionRowBuilder()
              .addComponents(charactersButton, worldsButton, itemsButton);
        
            message.reply({ components: [row] });

            break;
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

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
    
    switch(interaction.customId) {
        case 'characters':
            await listCharacters()
             .then(async (characters) => {
                await interaction.reply(characters.map((character) => character.name).join("\n"));
             })
             .catch((err) => {
                console.log(err)
                interaction.reply('Characters not found.');
             });

            break;
        case 'worlds':
            await interaction.reply('get Worlds.');
            break;
        case 'items':
            await interaction.reply('get items.');
            break;
    }
});

client.login(process.env.TOKEN);