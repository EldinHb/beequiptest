import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        primary: string;
        borderColor: string;
        borderRadius: string;
    }
}