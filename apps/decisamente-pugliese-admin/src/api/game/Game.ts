import { JsonValue } from "type-fest";

export type Game = {
  createdAt: Date;
  id: string;
  ipAddress: string | null;
  questions: JsonValue;
  responses: JsonValue;
  sessionId: string | null;
  updatedAt: Date;
};
