import { createTheme } from "@fluentui/react";
import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
    primary: '#ffa100',
    borderColor: '#eeeeef',
    borderRadius: '10px'
};

export const fluentTheme = createTheme({
    palette: {
        themePrimary: '#ffa100',
        themeLighterAlt: '#fffbf5',
        themeLighter: '#fff0d6',
        themeLight: '#ffe3b3',
        themeTertiary: '#ffc766',
        themeSecondary: '#ffad1f',
        themeDarkAlt: '#e69100',
        themeDark: '#c27b00',
        themeDarker: '#8f5a00',
        neutralLighterAlt: '#faf9f8',
        neutralLighter: '#f3f2f1',
        neutralLight: '#edebe9',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c6c4',
        neutralTertiary: '#a19f9d',
        neutralSecondary: '#605e5c',
        neutralSecondaryAlt: '#8a8886',
        neutralPrimaryAlt: '#3b3a39',
        neutralPrimary: '#323130',
        neutralDark: '#201f1e',
        black: '#000000',
        white: '#ffffff',
    }
});