import 'styled-components';
import { defaultTheme } from '../styles/themes/themes';

type ThemeType = typeof defaultTheme

declare module 'style-components'{
    export interface defaultTheme extends ThemeType{}
}