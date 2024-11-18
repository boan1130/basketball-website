export enum Position {
  PG = "控球後衛",
  SG = "得分後衛",
  SF = "小前鋒",
  PF = "大前鋒",
  C = "中鋒"
}

export interface Player {
  id: number;
  name: string;
  number: string;
  position: Position;
  team: string;
  league: 'CBA' | 'BLG' | 'TPBL' | 'PLG';
  height: string;
}

export interface Game {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  venue: string;
}