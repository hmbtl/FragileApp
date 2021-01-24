/**
* @providesModule ButtonStyles
*/
import colors from './colors';

import { StyleSheet } from 'react-native';
const buttonStyles = StyleSheet.create({
  buttonPrimary: {
    height: 42,
    borderRadius: 3
  }
  ,
  buttonOutline: {
    height: 42,
    borderRadius: 3,
    borderWidth: 2 
  },
  buttonOutlineDark: {
    height: 42,
    backgroundColor:'yellow',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: colors.white
  },
  buttonOutlineWhite: {
    height: 42,
    borderRadius: 3,
    borderWidth: 2 ,
    borderColor: colors.white
  },
  buttonFull: {
    width: '100%',
    marginLeft: 0,
    marginRight: 0
  }
});
export default buttonStyles;