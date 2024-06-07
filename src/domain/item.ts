export interface Place {
    identifier: string;
    name: string;
    description: string;
    image: string;
    inGame: boolean;
    stats: {
      attack: {
        type: string;
        value: number;
      };
      defense: {
        type: string;
        value: number;
      };
      accuracy: {
        type: string;
        value: number;
      };
      life: {
        type: string;
        value: number;
      };
      ether: {
        type: string;
        value: number;
      };
      movement: {
        type: string;
        value: number;
      };
    };

    toString(): string
}
  