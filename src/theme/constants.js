import {moderateScale} from '../utils/scale';
import layout from './layout';

const CONSTANT = {
  // Defaults Configs
  DEFAULT_LANGUAGE: 'en',
  APP_LANGUAGE: 'appLanguage',

  // Button Constatns
  BUTTON_COL_RADIUS: 4,
  BUTTON_HEIGHT: 48,
  BUTTON_WIDTH: '100%',
  BUTTON_HEIGHT_SM: 40,
  BUTTON_WIDTH_SM: layout.SCREEN_WIDTH / 2.24,

  // Square Button Config
  BUTTON_BG: '#FFF',
  BUTTON_SELECT_BG: '#FFD',
  BUTTON_FG: 'FFA',
  BUTTON_SELECT_FG: '#FFC',
  FONT_TYPE_SEMI_BOLD: 'semiBold',
  FONT_TYPE_REGULAR: 'regular',
  FONT_TYPE_BOLD: 'bold',
  FONT_TYPE_LIGHT: 'light',
  FONT_TYPE_MEDIUM: 'medium',
  FONT_TYPE_EXTRA_BOLD: 'extraBold',
  FONT_COLOR_REGULAR: '#4F4665',
  FONT_COLOR_HIGH_LIGHT: '#03F87E',
  LOADER_COLOR: '#FD4376',

  // SCALE MODERATE
  MODERATE_44: moderateScale(44),
  MODERATE_166: moderateScale(166),
  MODERATE_60: moderateScale(60),
  MODERATE_171: moderateScale(171),
  // Dot Constatns
  DOT_ACTIVE_COLOR: '#FF4376',
  DOT_INACTIVE_COLOR: '#392A52',
  // Fonts Size
  FONT_SIZE_9: 9,
  FONT_SIZE_10: 10,
  FONT_SIZE_11: 11,
  FONT_SIZE_12: 12,
  FONT_SIZE_13: 13,
  FONT_SIZE_14: 14,
  FONT_SIZE_16: 16,
  FONT_SIZE_18: 18,
  //
  SCROLL_OFF_SET: 200,
  CHANGE_VAL: 200,
  DURATION1: 300,
  DURATION2: 500,
};

export default CONSTANT;
