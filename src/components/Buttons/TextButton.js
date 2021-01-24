import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'


export default class TextButton extends PureComponent {
  
  render() {

    return (
      <TouchableOpacity
          onPress={this.props.onPress}
        >
        <Text style={this.props.style}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

TextButton.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func
}
  
TextButton.defaultProps = {
    buttonColor: 'green',
    title: 'Button',
    disabled: false 
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  button: {
    borderRadius:20,
    margin:50,
    padding:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    alignItems:'center',
  },
  buttonText:{
    color:'white'
  }
})
