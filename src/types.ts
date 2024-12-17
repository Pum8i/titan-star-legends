export interface ITalentPath {
  title: string;
  pathId: number;
  runes: IRune[];
}

export interface IRune {
  runeId: string;
  name: string;
  rune: string;
  darkRune: string;
  pointAdded: boolean;
}
