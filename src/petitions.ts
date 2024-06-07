import { Message } from "discord.js"
import { Character } from "./domain/character"
import { charactersFromDto } from "./mappers/character.mapper"


export async function getCharacterByName(identifier: Message):Promise<Character> {
    const name = identifier.content.split(' ')[1]
    const response = await fetch(`https://fallofthegods-data-gycoding.koyeb.app/characters/game/get?id=${name}`)
    const data = await response.json()
    return charactersFromDto(data)
}