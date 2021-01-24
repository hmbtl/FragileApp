/**
 * @providesModule TextStyles
 */
import { StyleSheet } from 'react-native';
import fonts from './fonts';
const largeText = 16;
const mediumText = 14;
const smallText = 12;
const regularText = fonts.avenirHeavy;
const semiboldText = fonts.avenirBold;
const textStyles = StyleSheet.create({
  largeText: {
    fontFamily: regularText,
    fontSize: largeText
  },
  largeTextSemibold: {
    fontFamily: semiboldText,
    fontSize: largeText
  },
  mediumText: {
    fontFamily: regularText,
    fontSize: mediumText
  },
  mediumTextSemibold: { 
    fontFamily: semiboldText,
    fontSize: mediumText
  },
  smallText: {
    fontFamily: regularText,
    fontSize: smallText
  },
  smallTextSemibold: {
    fontFamily: semiboldText,
    fontSize: smallText
  }
});
export default textStyles;