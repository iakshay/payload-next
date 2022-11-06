import { GlobalConfig } from "payload/types";
import Example from "../../../components/Example";

export const Settings: GlobalConfig = {
  slug: "settings",
  admin: {
    group: "Settings",
  },
  access: {
    read: () => true,
    update: () => false,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: false,
      defaultValue: "foo",
    },
    {
      name: "title2",
      type: "text",
      required: false,
      defaultValue: "foo2",
    },
    {
      name: "example",
      type: "ui",
      admin: {
        components: {
          Field: Example,
        },
      },
    },
  ],
};
