import { Message } from "discord.js"
import { Character } from "../domain/character"
import { charactersFromDTO } from "../mappers/character.mapper"

export async function getCharacterByName(identifier: Message): Promise<Character> {
    const name              = identifier.content.split(' ')[1]
    const response          = await fetch(`https://fallofthegods-data-gycoding.koyeb.app/characters/game/get?id=${name}`)
    const data              = await response.json();
    
    return charactersFromDTO(data);
}

export async function listCharacters(): Promise<Character[]> {
    const response          = await fetch(`https://fallofthegods-data-gycoding.koyeb.app/characters/game/page?page=0&size=58`);
    const data              = await response.json();
    
    console.log(data);
    
    return data.map((character: Character) => charactersFromDTO(character));
}
