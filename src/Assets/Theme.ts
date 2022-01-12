import { DefaultTheme } from 'styled-components';

// initial value
const white: DefaultTheme = {
    textColor: '#f5f6fa',
    accentColor: "#44bd32",
    sectionColor : "#464646",
    btnColor: '#2e3341',
    bgDefaultColor: '#1e272e',
    bgSecondaryColor: '#353b48',
    borderColor: '#2e3341',
    borderAccentColor: "#4b9440",
}

const dark: DefaultTheme = {
    textColor: '#333333',
    accentColor: "#000000",
    btnColor: '#E2E2E2',
    bgDefaultColor: '#FDFDFD',
    bgSecondaryColor: '#EDEDED',
    borderColor: '#000',
    borderAccentColor: "#4b9440",
}



const theme = {
    white: white,
    dark: dark
}

export default theme;