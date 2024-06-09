import { Character } from "../domain/character";
import { storyFromDTO } from "../mappers/story.mapper"

export const charactersFromDTO = (obj: any): Character => {
  const character: Character = {
    identifier: obj.identifier,
    name: obj.name,
    description: obj.description,
    title: obj.title,
    world: obj.world,
    image: obj.image,
    inGame: true,
    race: obj.race,
    stats: {
      attack: obj.stats.attack,
      defense: obj.stats.defense,
      accuracy: obj.stats.accuracy,
      life: obj.stats.life,
      ether: obj.stats.ether,
      movement: obj.stats.movement,
    },
    ability: {
      abilityName: obj.ability.abilityName,
      abilityDesc: obj.ability.abilityDesc,
    },
    stories: obj.stories.map((story: any) => storyFromDTO(story)),

    toString: () => {
      return `${character.name}, también conocido como "${character.title}", es un ${character.race} que vive en el mundo de ${character.world}.\n\n${character.description}`;
    },
  };
  
  return character;
};
