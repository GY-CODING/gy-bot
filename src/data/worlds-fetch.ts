import { Message } from "discord.js"
import { World, Place } from "../domain/world"
import { worldFromDTO } from "../mappers/world.mapper"


export async function getWorldByName(identifier: Message): Promise<World> {
    const name      = identifier.content.split(' ')[1]
    const response  = await fetch(`https://fallofthegods-data-gycoding.koyeb.app/worlds/get?id=${name}`)
    const data      = await response.json()

    return worldFromDTO(data)
}