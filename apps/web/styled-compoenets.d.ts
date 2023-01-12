import {
  FontSizeTypes,
  FontWeightTypes,
  LineHeightTypes,
  PaletteTypes,
  TextStyleTypes,
} from "@chooz/ui/styles/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: PaletteTypes;
    textStyle: TextStyleTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
    lineHeight: LineHeightTypes;
  }
}
