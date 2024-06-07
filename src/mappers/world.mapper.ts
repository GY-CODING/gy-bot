import { World, Place } from "../domain/world";

export const placeFromDTO = (obj: any): Place => {
  const place: Place = {
    identifier: obj.identifier,
    name: obj.name,
    description: obj.description,
    image: obj.image,
    inGame: obj.inGame,

    toString: () => {
      return `${place.name}`;
    }
  };

  return place;
};

export const worldFromDTO = (obj: any): World => {
  const world: World = {
    identifier: obj.identifier,
    name: obj.name,
    description: obj.description,
    image: obj.image,
    detailedIcon: obj.detailedIcon,
    places: obj.places.map((place: any) => placeFromDTO(place)),

    toString: () => {
      return `${world.places.toString()}`;
    }
  };

  return world;
};
