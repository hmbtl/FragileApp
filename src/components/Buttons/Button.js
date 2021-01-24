import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TouchableHighlight} from 'react-native'
import PropTypes from 'prop-types'


import fonts from '@config/fonts'
import colors from '@config/colors'
import constants from '@config/constants'


export default class Button extends PureComponent {

  render() {

    let textStyle  = {
      fontFamily: fonts.avenirHeavy,
      fontSize: this.props.textSize
    };
    let buttonStyle =  {
      borderRadius:this.props.radius,
      padding:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: this.props.elevation },
      shadowOpacity: 0.3,
      shadowRadius: this.props.elevation,
      elevation: this.props.elevation,
      alignItems:'center',
    };

    

    let backColor = this.props.disabled ? colors.disabledColor : this.props.buttonColor;
    let onPressClick = this.props.disabled ? null : this.props.onPress;

    return (
      <TouchableHighlight
        style={[{borderRadius:this.props.radius}, this.props.containerStyle]}
        onPress={onPressClick}
      >
        <View style={[buttonStyle,{backgroundColor:backColor}, this.props.style]}>
            <Text style={[textStyle,styles.buttonText,this.props.textStyle]}>
              {(this.props.allCaps) ? this.props.text.toUpperCase(): this.props.text}
            </Text>
        </View>
      </TouchableHighlight>
    )
  }
}


Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  textSize: PropTypes.number,
  elevation: PropTypes.number,
  radius: PropTypes.number,
  allCaps: PropTypes.bool,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object
}

Button.defaultProps = {
  buttonColor: colors.green,
  text: 'Button',
  disabled: false,
  textSize:constants.mediumText,
  elevation:2,
  radius: 20,
  allCaps:true
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  
  buttonText:{
    color:'white'
  }
})
