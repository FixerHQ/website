import { themeColors } from './colors.theme';
import { ThemePalette } from './theme.types';

export const lightThemePalette: ThemePalette = {
  primary: {
    light: themeColors.red.light,
    main: themeColors.red.main,
    dark: themeColors.red.dark,
    contrastText: themeColors.white.main,
  },
  secondary: {
    light: themeColors.cyan.light,
    main: themeColors.cyan.main,
    dark: themeColors.cyan.dark,
    contrastText: themeColors.white.main,
  },
  error: {
    light: themeColors.red.main,
    main: themeColors.red.dark,
    dark: themeColors.red.darker,
    contrastText: themeColors.white.main,
  },
  warning: {
    light: themeColors.yellow.light,
    main: themeColors.yellow.main,
    dark: themeColors.yellow.dark,
    contrastText: themeColors.white.main,
  },
  info: {
    light: themeColors.blue.light,
    main: themeColors.blue.main,
    dark: themeColors.blue.dark,
    contrastText: themeColors.white.main,
  },
  success: {
    light: themeColors.green.light,
    main: themeColors.green.main,
    dark: themeColors.green.dark,
    contrastText: themeColors.white.main,
  },
  background: {
    level1: themeColors.white.main,
    level2: themeColors.gray.superLight,
    level3: themeColors.gray.lighter,
    level4: themeColors.gray.light,
    level5: themeColors.gray.main,
  },
  text: {
    level1: themeColors.gray.darker,
    level2: themeColors.gray.dark,
    level3: themeColors.gray.main,
    level4: themeColors.gray.light,
    level5: themeColors.gray.lighter,
  },
};

export const darkThemePalette: ThemePalette = {
  primary: {
    light: themeColors.red.light,
    main: themeColors.red.main,
    dark: themeColors.red.dark,
    contrastText: themeColors.white.main,
  },
  secondary: {
    light: themeColors.cyan.light,
    main: themeColors.cyan.main,
    dark: themeColors.cyan.dark,
    contrastText: themeColors.white.main,
  },
  error: {
    light: themeColors.red.main,
    main: themeColors.red.dark,
    dark: themeColors.red.darker,
    contrastText: themeColors.white.main,
  },
  warning: {
    light: themeColors.yellow.main,
    main: themeColors.yellow.dark,
    dark: themeColors.yellow.darker,
    contrastText: themeColors.white.main,
  },
  info: {
    light: themeColors.blue.main,
    main: themeColors.blue.dark,
    dark: themeColors.blue.darker,
    contrastText: themeColors.white.main,
  },
  success: {
    light: themeColors.green.main,
    main: themeColors.green.dark,
    dark: themeColors.green.darker,
    contrastText: themeColors.white.main,
  },
  background: {
    level1: themeColors.black.main,
    level2: themeColors.gray.darker,
    level3: themeColors.gray.dark,
    level4: themeColors.gray.main,
    level5: themeColors.gray.light,
  },
  text: {
    level1: themeColors.gray.lighter,
    level2: themeColors.gray.light,
    level3: themeColors.gray.main,
    level4: themeColors.gray.dark,
    level5: themeColors.gray.darker,
  },
};
