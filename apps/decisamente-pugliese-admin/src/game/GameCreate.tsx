import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GameCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ipAddress" source="ipAddress" />
        <div />
        <div />
        <TextInput label="sessionId" source="sessionId" />
      </SimpleForm>
    </Create>
  );
};
