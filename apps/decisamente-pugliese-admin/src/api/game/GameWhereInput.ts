import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GameWhereInput = {
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  questions?: JsonFilter;
  responses?: JsonFilter;
  sessionId?: StringNullableFilter;
};
