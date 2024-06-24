import { Game as TGame } from "../api/game/Game";

export const GAME_TITLE_FIELD = "ipAddress";

export const GameTitle = (record: TGame): string => {
  return record.ipAddress?.toString() || String(record.id);
};
