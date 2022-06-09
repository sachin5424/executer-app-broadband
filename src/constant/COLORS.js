import React from 'react'
import { Dimensions } from "react-native";
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio';
export const { width, height } = Dimensions.get("window");
export let FONT_BACK_LABEL = 18;



export const COLORS = {
  // colors
  black: '#1E1F20',
  lightBlack: '#4A4B4C',
  green: '#00B500',
  lightGreen: '#74E39A',
  Leafgreen: '#01B075',
  white: '#FFFFFF',
  grayish: 'rgb(242, 242, 242)',
  gray: '#ABAFB8',
  lightGray: '#BEC1D2',
  lightWhite: '#F6F5F5',
  extralightGray: '#F2F2F2',
  orange: '#FC6011',
  blue: '##00B4D8',
  skyBlue: '#00CCFF',
  lightBlue: '#90E0EF',
  lightOrange: '#FF935D',
  themeColor: '#FFFFFF',
  blue: '#367FC0',
  redish: '#DD4B39',
  danger: '#D40000',
  darkYellow: '#FCB13E',
  purple: '#1D0553',
  lightPurple: '#68509F',
  feildBackground: '#432B79',
  pink: '#FE8FB0',
  pinktransparent: '#FE8FB0aa',
  creamPink: "#FB8C87",
  green: '#4AA387',
  darkGreen: '#229879',
  darkLime: '#1A8871',
  lightLime: '#BBD6C5',
  lime: '#2AD699',
  lightGreen: '#E7F9EF',
  lightGreen1: '#8EbCA0',

  white: '#ffffff',
  white2: '#F9F9F9',
  black: '#020202',
  blue: '#4096FE',
  gray: '#777777',
  gray2: '#F8F8F8',
  gray3: '#00000029',
  gray4: '#F7F6F7',
  lightGray: '#F6F6F6',
  lightGray2: '#757575',
  lightGray3: '#D8D8D8',

  lightPink: '#ffebfd',
  lightPink: '#ffd9fb',

  lightRed: '#ffebeb',
  lightRed2: '#ffd9d9',

  transparentBlack1: 'rgba(2, 2, 2, 0.1)',
  transparentBlack3: 'rgba(2, 2, 2, 0.3)',
  transparentBlack5: 'rgba(2, 2, 2, 0.5)',
  transparentBlack7: 'rgba(2, 2, 2, 0.7)',
  transparentBlack9: 'rgba(2, 2, 2, 0.9)',

  transparentGray: 'rgba(77,77,77, 0.8)',
  transparentDarkGray: 'rgba(20,20,20, 0.9)',

  transparent: 'transparent',

  /* Colors: */
  whizzMain: '#E84340',
  placeholderColor: '#B6B7B7',
  secondaryFontColor: '#7C7D7E',
  primaryFontColor: '#4A4B4D',
  mainColor: '#FC6011',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 20,

  // margins
  margin1: 5,
  margin2: 10,
  margin3: 12,
  margin4: 15,
  margin5: 20,
  margin6: 30,

  margin7: 40,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};


export const Default_Api = () => {
  if (PixelRatio.get() <= 2) {
    FONT_BACK_LABEL = 14;
  }
  return null
}

// export 




