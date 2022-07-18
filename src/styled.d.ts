import "styled-components";
import { BasedTheme } from "./components/theme";

declare module "styled-components" {
  export interface DefaultTheme extends BasedTheme {}
}