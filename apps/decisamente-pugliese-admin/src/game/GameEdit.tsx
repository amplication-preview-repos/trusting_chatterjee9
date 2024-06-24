import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ipAddress" source="ipAddress" />
        <div />
        <div />
        <TextInput label="sessionId" source="sessionId" />
      </SimpleForm>
    </Edit>
  );
};
