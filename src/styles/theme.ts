import { extendTheme } from "@chakra-ui/react";

const global = {
  body: {
    bg: "gray.50",
  },
}

export const theme = extendTheme({ styles: { global } })