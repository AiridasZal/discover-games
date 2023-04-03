import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "#F0F0F0",
    _dark:{
        backgroundColor: "#202020"
    }
  }
});

export const cardTheme = defineMultiStyleConfig({ baseStyle });