import React, { Component } from 'react'
import { Text,Image, StyleSheet, View, Platform} from 'react-native'
import PropTypes from 'prop-types'

import {scale} from 'react-native-size-matters'
import {fonts, constants, colors} from '@config'

export default class HeaderTitle extends Component {
  render() {

    const textStyle = {
        textAlign: 'center',
        fontSize: constants.fontSize.medium,
        bottom:0,
        color: this.props.textColor,
        fontFamily:fonts.avenirHeavy,
    }

    if (this.props.image){
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={{height:16, marginRight:10, marginTop:4}} resizeMode='contain'/>
                <Text style={[textStyle, this.props.style]}>{this.props.title}</Text>
            </View>
          )
    } else {
        return (
            <View style={styles.container}>
                <Text style={[textStyle, this.props.style]}>{this.props.title}</Text>
            </View>
        )
    }

   
  }
}

HeaderTitle.propTypes = {
    title:PropTypes.any,
    image:PropTypes.any,
    textColor: PropTypes.any
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        ...Platform.select({
            android: {
              marginLeft:130
            },
          }),
    }
})
