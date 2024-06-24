import { InputJsonValue } from "../../types";

export type GameCreateInput = {
  ipAddress?: string | null;
  questions?: InputJsonValue;
  responses?: InputJsonValue;
  sessionId?: string | null;
};
