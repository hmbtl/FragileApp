/**
* @providesModule Constants
*/
import { Dimensions, Platform,PixelRatio } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from './colors';


let headerHeight = Platform.OS === 'ios' ? 66 : 46;
let footerHeight = 55;
const constants = {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  viewPadding: 15,
  largeText : 16,
  mediumText : 14,
  veryLargeText: 19,
  extraLargeText:21,
  smallText : 12,
  defaultSpacer: 10,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  fontSize:{
    mini:verticalScale(8),
    small:verticalScale(12),
    xsmall:verticalScale(15),
    medium:verticalScale(16),
    large:verticalScale(19),
    xlarge:verticalScale(21)
  },
  divider: {backgroundColor: colors.smoke},
  baseImageStyle: {flex: 1, width: undefined, height: undefined}
};
export default constants;