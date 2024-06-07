export interface Place {
    identifier: string;
    name: string;
    description: string;
    image: string;
    inGame: boolean;

    toString(): string
}

export interface World {
    identifier: string;
    name: string;
    description: string;
    image: string;
    detailedIcon: string;
    places: Array<Place>;

    toString(): string
}
  