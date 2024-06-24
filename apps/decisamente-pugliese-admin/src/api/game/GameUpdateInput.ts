import { InputJsonValue } from "../../types";

export type GameUpdateInput = {
  ipAddress?: string | null;
  questions?: InputJsonValue;
  responses?: InputJsonValue;
  sessionId?: string | null;
};
