import {ButtonBuilder, ButtonStyle, SlashCommandBuilder} from 'discord.js';

export const charactersButton = new ButtonBuilder()
    .setCustomId('characters')
    .setLabel('Get Characters')
    .setStyle(ButtonStyle.Primary);

export const worldsButton = new ButtonBuilder()
    .setCustomId('worlds')
    .setLabel('Get Worlds')
    .setStyle(ButtonStyle.Primary);

export const itemsButton = new ButtonBuilder()
    .setCustomId('items')
    .setLabel('Get Items')
    .setStyle(ButtonStyle.Primary);

export const linkButton = new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setURL('https://gycoding.com')
    .setEmoji('🚀');
