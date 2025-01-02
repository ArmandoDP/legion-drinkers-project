import { css } from "@emotion/react";

export const Colors = {
    white: "#FFFFFF",
    dark: "#101118",
    darkLighter: "#20222e",
    yellow: "#f9dc22",
};

export const ThemeVar = css`
    :root {
        --primary: ${Colors.white};
        --secondary: ${Colors.darkLighter};
        --tertiary: ${Colors.dark};
        --yellow: ${Colors.yellow};
    }
`;

export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    tertiary: "var(--tertiary)",
    yellow: "var(--yellow)",
};
