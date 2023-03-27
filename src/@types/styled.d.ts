import "styled-components ";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;

      background: string;
      card: string;

      text: string;
      disabled: string;

      green: string;
    };
  }
}
