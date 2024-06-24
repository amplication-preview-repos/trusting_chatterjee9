import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  questions?: SortOrder;
  responses?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
};
