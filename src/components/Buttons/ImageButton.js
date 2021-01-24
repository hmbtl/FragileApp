import React, { PureComponent } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'


export default class ImageButton extends PureComponent {
  constructor(props){
    super(props);
  }

  static defaultProps = {
    disabled: false
  }

  render() {

    return (
      <TouchableOpacity
          style={this.props.style}
          activeOpacity={0.7}
          onPress={this.props.onPress}
        >
        <Image source={this.props.source }
          style={this.props.imageStyle}
        />
      </TouchableOpacity>
    )
  }
}
