export interface ITalentPath {
  title: string;
  pathId: number;
  runes: IRune[];
}

export interface IRune {
  runeId: string;
  name: string;
  runeOrder: number;
  rune: string;
  darkRune: string;
  pointAdded: boolean;
}
